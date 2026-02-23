import { useState } from "react";
import "../App.css";

import underImg from "../assets/underweight.jpg";
import normalImg from "../assets/normal.jpg";
import obeseImg from "../assets/obese.jpg";

function BMICalculator() {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    let w = Number(weight);
    let h = Number(height);

    if (!name || w <= 0 || h <= 0) {
      alert("Please enter valid details");
      return;
    }

    // Convert weight to kg
    if (weightUnit === "lbs") {
      w = w * 0.453592;
    }

    // Convert height to meters
    if (heightUnit === "cm") {
      h = h / 100;
    } else if (heightUnit === "in") {
      h = h * 0.0254;
    } else if (heightUnit === "ft") {
      h = h * 0.3048;
    }

    const bmiValue = w / (h * h);

    let category = "";
    let message = "";
    let image = "";

    if (bmiValue < 18.5) {
      category = "Underweight";
      message = "Eat nutritious food and build your strength 💪";
      image = underImg;
    } else if (bmiValue < 25) {
      category = "Normal";
      message = "Great job! Maintain your healthy lifestyle 🎉";
      image = normalImg;
    } else {
      category = "Obese";
      message = "Start small workouts daily. You can do it! 🏃";
      image = obeseImg;
    }

    setResult({
      bmi: bmiValue.toFixed(2),
      category,
      message,
      image,
    });
  };

  const goBack = () => {
    setResult(null);
    setName("");
    setWeight("");
    setHeight("");
  };

  return (
    <div className="app">
      <div className="card">
        {!result ? (
          <>
            <h2>BMI Calculator</h2>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="full-input"
            />

            {/* Weight */}
            <div className="input-group">
              <input
                type="number"
                placeholder="Enter weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
              <select
                value={weightUnit}
                onChange={(e) => setWeightUnit(e.target.value)}
              >
                <option value="kg">kg</option>
                <option value="lbs">lb</option>
              </select>
            </div>

            {/* Height */}
            <div className="input-group">
              <input
                type="number"
                placeholder="Enter height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
              <select
                value={heightUnit}
                onChange={(e) => setHeightUnit(e.target.value)}
              >
                <option value="cm">cm</option>
                <option value="m">m</option>
                <option value="in">in</option>
                <option value="ft">ft</option>
              </select>
            </div>

            <button onClick={calculateBMI}>Calculate BMI</button>
          </>
        ) : (
          <>
            <h2>{name}, your BMI is {result.bmi}</h2>
            <h3>{result.category}</h3>

            <img
              src={result.image}
              alt={result.category}
              className="result-image"
            />

            <p>{result.message}</p>

            <button onClick={goBack}>Back</button>
          </>
        )}
      </div>
    </div>
  );
}

export default BMICalculator;
