import React from "react";

interface HourlyData {
  dt: number;
  main: {
    temp: number;
  };
  weather: {
    icon: string;
  }[];
}

const HourlyForecast: React.FC<{ hourly: HourlyData[] }> = ({ hourly }) => {
  return (
    <div className="hourlyForecast">
      {hourly.slice(0, 8).map((hour, index) => (
        <div key={index} className="hourlyItem">
          <p>
            {new Date(hour.dt * 1000).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
            alt="weather icon"
          />
          <p>{Math.round(hour.main.temp)}°F</p>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecast;
