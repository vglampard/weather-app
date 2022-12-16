import IconDisplay from "../IconDisplay/IconDisplay";

type WeatherDisplayProps = {
	weatherData: {
		location: string;
		temperature: number;
		weather: string;
		description: string;
	};
};
export function WeatherDisplay(props: WeatherDisplayProps) {
	const { weatherData } = props;
	const { location, temperature, weather, description } = weatherData;

	return (
		<>
			<h2> {location} </h2>
			<div className="weather-details-container">
				{description !== "" && <IconDisplay description={description} />}
				<h2 className="weather"> {weather} </h2>
				{temperature !== 999 && <h2> {temperature}°C </h2>}
			</div>
		</>
	);
}
