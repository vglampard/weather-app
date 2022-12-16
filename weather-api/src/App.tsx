//#APP FUNCTIONALITY IMPORTS
import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { WeatherDisplay } from "./components/WeatherDisplay/WeatherDisplay";
import Snowfall from "react-snowfall";

//#TS PARTICLES IMPORTS
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { namespace } from "./types/rainType";


const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

function App() {
  const [weatherData, setWeatherData] = useState({
    location: "",
    temperature: 999,
    weather: "",
    description: "",
  });
  const [location, setLocation] = useState("");

  //## TS PARTICLES FUNCTIONS
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

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
      description: data.weather[0].description.replace(/\s/g, ""),
    };
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const weatherDataResponse = await getWeather();
    setWeatherData(weatherDataResponse);
  }

  useEffect(() => {
    console.log("Weather state: ", weatherData);
  }, [weatherData]);

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
		url="https://api.jsonbin.io/v3/qs/639c92ff15ab31599e1dfd63"
      />

      {/snow/.test(weatherData.description) && <Snowfall />}
      <header className="App-header">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="your location here"
            value={location}
            onChange={(e) => handleChange(e)}
          />
        </form>
        <WeatherDisplay weatherData={weatherData} />
      </header>
    </div>
  );
}

export default App;
