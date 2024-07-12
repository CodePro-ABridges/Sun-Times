# Sun-Times☀️

A sleek and responsive weather application built with React and TypeScript, utilizing the OpenWeather API.

## Features

- Current weather display
- 24-hour forecast (3-hour intervals)
- Search functionality for different cities
- Geolocation-based weather on initial load
- Responsive design for various screen sizes

## Screenshots

<img width="1440" alt="Screenshot 2024-07-11 at 3 09 30 AM" src="https://github.com/CodePro-ABridges/Sun-Times/assets/78990603/72d1f87a-bb67-424c-b6f4-786b081255e9">

## Demo Video

https://github.com/CodePro-ABridges/Sun-Times/assets/78990603/b5cfd5cc-d964-4966-86e4-c9e1d7963a1c

## Technologies Used

- React
- TypeScript
- Styled Components
- Axios
- OpenWeather API

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm or yarn

### Installation

1. Clone the repository:

git clone https://github.com/CodePro-ABridges/Sun-Times.git

2. Navigate to the project directory:

cd sun-times

3. Install dependencies:

npm install
or
yarn install

4. Create a `.env` file in the root directory and add your OpenWeather API key:

VITE_API_ENDPOINT=https://api.openweathermap.org/data/2.5/
VITE_API_KEY=your_api_key_here

5. Start the development server:

npm run dev

6. Open your browser and visit `http://localhost:5173` to view the app.

## Usage

- The app will initially attempt to get your current location for weather data.
- Use the search bar to look up weather information for different cities.
- The current weather and a 24-hour forecast will be displayed for the selected location.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [OpenWeather API](https://openweathermap.org/api) for providing weather data.
- [React Icons](https://react-icons.github.io/react-icons/) for the weather icons.
- [DesignByBibbs](https://github.com/Designbybibbs) for the UX/UI direction and assistance.
