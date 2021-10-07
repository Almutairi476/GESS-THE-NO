import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";


let randomNumber = Math.round(Math.random() * 21);
const GuessTheNumber = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState("choose a number");

  const onClick = () => { 
    if (value > randomNumber)
      setResults(<p className="alert alert-warning">Your answer is way higher than the number</p>);
    else if (value < randomNumber)
      setResults(<p className="alert alert-warning">Your answer is way lower than the number</p>);
      else{
        setResults(<p className="alert alert-success">Nooooice!!</p>);
      }
  };

  return (
    <>
      <h2>Guess The No.</h2>
      {randomNumber}
      <p className="lead">Choose a number between 1 and 20.</p>
      <input
        
        type="number"
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit" onClick={onClick}>
        Done
      </button>
      <br />
      <br />
      {results}
    </>
  );
};

export default GuessTheNumber;