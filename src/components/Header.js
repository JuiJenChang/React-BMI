import React, { useState } from "react";
import "./Header.css";
import bmicLogo from "../images/BMICLogo.png";

const date = new Date();

function Header({ addReport }) {
  const [data, setData] = useState({
    weight: "",
    height: "",
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  });

  const countBmi = () => {
    let resultBmi = (data.weight / Math.pow(data.height * 0.01, 2)).toFixed(2);
    let underWeight = {
      result: "過輕",
      bmi: resultBmi,
      weight: data.weight,
      height: data.height,
      year: data.year,
      month: data.month,
      day: data.day,
      color: "#23c1ff"
    };
    let normalWeight = {
      result: "理想",
      bmi: resultBmi,
      weight: data.weight,
      height: data.height,
      year: data.year,
      month: data.month,
      day: data.day,
      color: "#06c410"
    };
    let overWeight = {
      result: "過重",
      bmi: resultBmi,
      weight: data.weight,
      height: data.height,
      year: data.year,
      month: data.month,
      day: data.day,
      color: "#f79525"
    };
    let obesity = {
      result: "肥胖",
      bmi: resultBmi,
      weight: data.weight,
      height: data.height,
      year: data.year,
      month: data.month,
      day: data.day,
      color: "#ff0000"
    };
    if (resultBmi < 18.5) {
      addReport(underWeight);
    } else if (resultBmi >= 18.5 && resultBmi < 24) {
      addReport(normalWeight);
    } else if (resultBmi >= 24 && resultBmi < 27.9) {
      addReport(overWeight);
    } else if (resultBmi >= 27.9) {
      addReport(obesity);
    }
  };

  return (
    <div>
      <div className="header">
        <div className="header-img">
          <a href="/">
            <img src={bmicLogo} />
          </a>
        </div>
        <div>
          <div className="header-input">
            <p>身高cm</p>
            <input
              value={data.height}
              onChange={e => setData({ ...data, height: e.target.value })}
              placeholder="請輸入身高"
            />
          </div>
          <div className="header-input">
            <p>體重kg</p>
            <input
              value={data.weight}
              onChange={e => setData({ ...data, weight: e.target.value })}
              placeholder="請輸入體重"
            />
          </div>
        </div>
        <div className="header-btn">
          <button onClick={countBmi}>看結果</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
