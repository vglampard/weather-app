import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { ImageDisplay } from "./components/ImageDisplay/ImageDisplay";

function App() {
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState((""))
  const [name, setName] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  async function getAge(){
    const result = await fetch(`https://api.agify.io/?name=${name}`);
    const data = await result.json();
    return data.age;
  }

  async function getGender(){
    const result = await fetch(`https://api.genderize.io?name=${name}`);
    const data = await result.json();
    return data.gender;
  
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const genderData = await getGender();
    console.log("gender: ", genderData);

    const ageData = await getAge();
    console.log("age: ", ageData);

    setAge(ageData);
    setGender(genderData)
  }

  useEffect(() => {
    console.log("gender state: ", gender);
  }, [gender]);

  useEffect(() => {
    console.log("gender state: ", age);
  }, [age]);

  return (
    <div className="App">
      <header className="App-header">

        {age > 0 && <h1 className="spinny-spinny">{age}</h1>}

        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="your name here"
            value={name}
            onChange={(e) => handleChange(e)}
          />
      
        </form>
        <ImageDisplay age={age} />
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJIoHv-y7oGHZWf0PGQd4HobY_6hEwfxDdaQ&usqp=CAU" className="spinny-bg" alt="logo" />

      
      </header>
    </div>
  );
}

export default App;
