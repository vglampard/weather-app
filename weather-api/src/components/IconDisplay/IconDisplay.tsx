type IconDisplayProps = {
	description: string;
};

function IconDisplay(props: IconDisplayProps) {
	const { description } = props;

	let weatherRef = description;
	if (/rain/.test(description)) weatherRef = "rain";
	if (/thunderstorm/.test(description)) weatherRef = "thunderstorm";
	if (/drizzle/.test(description)) weatherRef = "rain";
	if (/snow/.test(description)) weatherRef = "snow";
	if (/sleet/.test(description)) weatherRef = "snow";
	if (/Smoke/.test(description)) weatherRef = "mist";
	if (/Haze/.test(description)) weatherRef = "mist";
	if (/sand/.test(description)) weatherRef = "mist";
	if (/dust/.test(description)) weatherRef = "mist";
	if (/fog/.test(description)) weatherRef = "mist";
	if (/ash/.test(description)) weatherRef = "mist";
	if (/squalls/.test(description)) weatherRef = "mist";
	if (/tornado/.test(description)) weatherRef = "mist";
	if (/cloud/.test(description) && description !== "fewclouds") {
		weatherRef = "scatteredclouds";
	}

	type iconRefObject = {
		clearsky: string;
		fewclouds: string;
		scatteredclouds: string;
		brokenclouds: string;
		showerrain: string;
		rain: string;
		thunderstorm: string;
		snow: string;
		mist: string;
	};

	const iconRef: iconRefObject = {
		clearsky: "01d",
		fewclouds: "02d",
		scatteredclouds: "03d",
		brokenclouds: "04d",
		showerrain: "09d",
		rain: "10d",
		thunderstorm: "11d",
		snow: "13d",
		mist: "50d",
	};
	return (
		<img
			className="icon"
			src={`https://openweathermap.org/img/wn/${
				iconRef[weatherRef as keyof iconRefObject]
			}@2x.png`}
			alt={description}
		/>
	);
}

export default IconDisplay;
