import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
// import IconDisplay from "./components/IconDisplay/IconDisplay";
import { WeatherDisplay } from "./components/WeatherDisplay";

const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;


// update types across the files
function App() {
  const [weather, setWeather] = useState({
    location: "",
    temperature: 0,
    weather: "",
    description: "",
  });
  const [location, setLocation] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLocation(e.target.value);
  }

  async function getWeather() {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
    );
    const data = await result.json();
    return {
      location: data.name,
      temperature: Math.round(data.main.temp - 273.15),
      weather: data.weather[0].main,
    };
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const weatherData = await getWeather();

    setWeather(weatherData);
  }

  useEffect(() => {
    console.log("Weather state: ", weather);
  }, [weather]);

  return (
    <div className="App">
      <header className="App-header">
        {/* {weather > 0 && <h1 className="spinny-spinny">{weather.location}</h1>} */}

        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="your location here"
            value={location}
            onChange={(e) => handleChange(e)}
          />
        </form>
        {/* <IconDisplay weather={weather} /> */}

        {/* <img
					src="https://encrypted-tbn0.gstatic.com/imweathers?q=tbn:ANd9GcTJIoHv-y7oGHZWf0PGQd4HobY_6hEwfxDdaQ&usqp=CAU"
					className="spinny-bg"
					alt="logo"
				/> */}
      </header>
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;
