import IconDisplay from "../IconDisplay/IconDisplay";

export function WeatherDisplay({ location, temperature, weather }) {
  return (
    <>
      <h2> {location} </h2>
      <h2> {temperature}°C </h2>
      {/* {weather === "#" && <img src = # alt = #/>} */}
    </>
  );
}
