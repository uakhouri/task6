import { Link } from "react-router-dom";
import "../stylesheets/Home.css";
function Home() {
  return (
    <div className="MainHome">
      <div className="Headings1">
        <h1>BMI CALCULATOR</h1>
      </div>
      <div className="Headings2">
        <h2>BMI - Body Mass Index</h2>
        <h4>
          Body Mass Index (BMI) is a person's weight in kilograms divided by the
          square of height in meters. A high BMI can indicate high body fatness.
        </h4>
      </div>
      <div className="Range">
        <div className="Underweight"></div>
        <div className="Normal"></div>
        <div className="Overweight"></div>
        <div className="Obese"></div>
        <div className="Extremelyobese"></div>
      </div>

      <button className="Calcbutton">
        <Link to="/calculator" className="Link">
          Calculate your BMI
        </Link>
      </button>
    </div>
  );
}
export default Home;
