import React from "react";
import "./Main.css";

function Main({ report, removeReport }) {
  return (
    <div className="main">
      <h3 className="main-title">BMI 紀錄</h3>
      <ul>
        {report.map((data, i) => (
          <li key={i}>
            <div className="main-result">
              <span>{data.result}</span>
            </div>
            <div className="main-li">
              <span className="main-span-1">BMI</span>
              <span className="main-span-2">{data.bmi}</span>
            </div>
            <div className="main-li">
              <span className="main-span-1">weight</span>
              <span className="main-span-2">{data.weight}kg</span>
            </div>
            <div className="main-li">
              <span className="main-span-1">height</span>
              <span className="main-span-2">{data.height}cm</span>
            </div>
            <button onClick={() => removeReport(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;