import React from "react";
import "./Main.css";

function Main({ report, removeReport }) {
  return (
    <div className="main">
      <h3 className="main-title">BMI 紀錄</h3>
      <ul>
        {report.map(({ result, bmi, weight, height }, i) => (
          <li key={i}>
            <div className="main-result">
              <span>{result}</span>
            </div>
            <div className="main-li">
              <span className="main-span-1">BMI</span>
              <span className="main-span-2">{bmi}</span>
            </div>
            <div className="main-li">
              <span className="main-span-1">weight</span>
              <span className="main-span-2">{weight}kg</span>
            </div>
            <div className="main-li">
              <span className="main-span-1">height</span>
              <span className="main-span-2">{height}cm</span>
            </div>
            <button onClick={() => removeReport(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
