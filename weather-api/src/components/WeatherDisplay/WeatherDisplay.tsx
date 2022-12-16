import IconDisplay from "../IconDisplay/IconDisplay";

type WeatherDisplayProps ={
  weatherData: {
      location: string,
      temperature: number,
      weather: string,
	    description: string
  }
}

export function WeatherDisplay( props: WeatherDisplayProps ) {

  const {weatherData} = props

  const {location, temperature, weather, description} = weatherData

  return (
    <>
      <h2> {location} </h2>
      <h2> {temperature}°C </h2>
      <h2> {weather} </h2>
      <IconDisplay description={description}/>
    </>
  );
}
