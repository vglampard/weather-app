type ImageDisplayProps = {
  age: number;
};

export function ImageDisplay(props: ImageDisplayProps) {
  const { age } = props;
  return (
    <div>
      {age > 35 && (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSini6CMhmzSd4Ga-UZ-Y8F9B33ZXyrwk6jgw&usqp=CAU"
          alt="old"
          
        />
      )}

        { age>0 && age < 36 && (
        <img
          src="https://m.media-amazon.com/images/I/519lw7dnwxL._AC_SY355_.jpg"
          alt="babyyy"/>)}
    </div>
  )
}
