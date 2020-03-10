import React, { useState } from "react";
import "./Header.css";
import bmicLogo from "../images/BMICLogo.png";

function Header({ addReport }) {
  const [bmi, setBmi] = useState(null);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [data, setData] = useState({});
  
  const countBmi = () => {
    if (weight !== "" && height !== "") {
      setBmi((weight / Math.pow(height * 0.01, 2)).toFixed(2));
      if (bmi !== null) {
        if (bmi < 18.5) {
          setData({
            result: "過輕",
            bmi: bmi,
            weight: weight,
            height: height
          });
        } else if (bmi >= 18.5 && bmi < 24) {
          setData({
            result: "理想",
            bmi: bmi,
            weight: weight,
            height: height
          });
        } else if (bmi >= 24 && bmi < 27.9) {
          setData({
            result: "過重",
            bmi: bmi,
            weight: weight,
            height: height
          });
        } else if (bmi >= 27.9) {
          setData({
            result: "肥胖",
            bmi: bmi,
            weight: weight,
            height: height
          });
        }
      }
      addReport(data);
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
              value={height}
              onChange={e => setHeight(e.target.value)}
              placeholder="請輸入身高"
            />
          </div>
          <div className="header-input">
            <p>體重kg</p>
            <input
              value={weight}
              onChange={e => setWeight(e.target.value)}
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
