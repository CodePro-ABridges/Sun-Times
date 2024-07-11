import React, { useEffect, useState } from "react";
import { MainWrapper } from "../StyleComponents/weatherStyles.module";
import { AiOutlineSearch } from "react-icons/ai";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { RiLoaderFill } from "react-icons/ri";
import HourlyForecast from "./SubComponent/HourlyForecast.tsx";
import axios from "axios";

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  name: string;
}

interface ForecastData {
  list: {
    dt: number;
    main: {
      temp: number;
    };
    weather: {
      icon: string;
    }[];
  }[];
}

const DisplayWeather: React.FC = () => {
  //Keys
  const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
  const API_KEY = import.meta.env.VITE_API_KEY;

  //STATE
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  //Openweather current weather forcast.
  const fetchWeatherData = async (lat: number, lon: number) => {
    setLoading(true);
    try {
      const weatherUrl = `${API_ENDPOINT}weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
      const forecastUrl = `${API_ENDPOINT}forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;

      const [weatherResponse, forecastResponse] = await Promise.all([
        axios.get(weatherUrl),
        axios.get(forecastUrl),
      ]);

      setWeather(weatherResponse.data);
      setForecast(forecastResponse.data);
    } catch (err) {
      console.error("Error fetching weather data: ", err);
    } finally {
      setLoading(false);
    }
  };

  //Handle search
  const handleSearch = async () => {
    if (city) {
      try {
        const geocodeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
        const response = await axios.get(geocodeUrl);
        if (response.data.length > 0) {
          const { lat, lon } = response.data[0];
          fetchWeatherData(lat, lon);
        } else {
          console.error("City not found");
        }
      } catch (err) {
        console.error("Error fetching city coordinates: ", err);
      }
    }
  };

  //Handle key press for search
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherData(latitude, longitude);
      },
      (err) => console.error("Error fetching geolocation: ", err),
    );
  }, []);

  return (
    <MainWrapper>
      <div className="container">
        <div className="searchArea">
          <input
            type="text"
            placeholder="Enter a city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <div className="searchCircle" onClick={handleSearch}>
            <AiOutlineSearch className="searchIcon" />
          </div>
        </div>

        {loading ? (
          <div className="loader">
            <RiLoaderFill className="loaderIcon" />
          </div>
        ) : weather ? (
          <>
            <div className="weatherArea">
              <h1>{weather.name}</h1>
              <div className="icon">
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                  alt="weather icon"
                />
              </div>
              <h1>{Math.round(weather.main.temp)}°F</h1>
              <h2>{weather.weather[0].description}</h2>
            </div>
            <div className="bottomInfoArea">
              <div className="humidityLevel">
                <WiHumidity className="windIcon" />
                <div className="humidInfo">
                  <h1>{weather.main.humidity}%</h1>
                  <p>Humidity</p>
                </div>
              </div>

              <div className="wind">
                <FiWind className="windIcon" />
                <div className="humidInfo">
                  <h1>{weather.wind.speed} mph</h1>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>

            {forecast && <HourlyForecast hourly={forecast.list} />}
          </>
        ) : (
          <div className="weatherArea">
            <h1>No Data</h1>
          </div>
        )}
      </div>
    </MainWrapper>
  );
};

export default DisplayWeather;
