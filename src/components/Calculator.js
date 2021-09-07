import { useState } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Calculator.css";

function Calculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(0);
  function Calc(height, weight) {
    console.log(height, weight);
    height = height / 100;
    let bmiCalc = weight / (height * height);
    setBmi(bmiCalc);
    // console.log(bmi);
  }

  function giveResult(passedBmi) {
    if (passedBmi < 18.5 && passedBmi > 0) {
      return "You are Underweight";
    } else if (passedBmi > 18.5 && passedBmi < 24.9) {
      return "You are Normal";
    } else if (passedBmi > 25.0 && passedBmi < 29.9) {
      return "You are Over Weight";
    } else if (passedBmi > 30.0 && passedBmi < 34.9) {
      return "You are Obese";
    } else if (passedBmi > 35.0) {
      return "You are Extremely Obese";
    }
  }
  return (
    <div className="MainCalc">
      <div>
        <Link to="/" className="Linkcal">
          Home
        </Link>
      </div>
      <div className="Text">
        <h1>Calculate your BMI</h1>
        <h2>Enter your Height (in cm): </h2>
        <input
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="Input"></input>
        <br></br>
        <br></br>
        <h2>Enter your Weight (in kg): </h2>
        <input
          value={weight}
          className="Input"
          onChange={(e) => setWeight(e.target.value)}></input>
        <br></br>
        <br></br>
      </div>
      <button onClick={() => Calc(height, weight)} className="Calcbutton">
        Submit
      </button>
      <div className="Text">
        <h3>Your Body Mass Index (BMI) is {bmi.toFixed(2)}</h3>
        <h4>{giveResult(bmi)}</h4>
      </div>
    </div>
  );
}
export default Calculator;
