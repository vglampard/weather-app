type IconDisplayProps = {
    description: string,
  };

function IconDisplay(props: IconDisplayProps) {
	const { description } = props;
	return (
		<div>
			{/* {weather > 35 && (
				<img
					src="https://encrypted-tbn0.gstatic.com/imweathers?q=tbn:ANd9GcSini6CMhmzSd4Ga-UZ-Y8F9B33ZXyrwk6jgw&usqp=CAU"
					alt="old"
				/>
			)}

			{weather > 0 && weather < 36 && (
				<img
					src="https://m.media-amazon.com/imweathers/I/519lw7dnwxL._AC_SY355_.jpg"
					alt="babyyy"
				/>
			)} */}
		</div>
	);
}

export default IconDisplay;
