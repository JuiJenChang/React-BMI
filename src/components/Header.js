import React, { useState } from "react";
import "./Header.css";
import bmicLogo from "../images/BMICLogo.png";

function Header({ addReport }) {
  const [data, setData] = useState({
    result: "",
    bmi: "",
    weight: "",
    height: ""
  });

  const countBmi = () => {
    setData({
      ...data,
      bmi: (data.weight / Math.pow(data.height * 0.01, 2)).toFixed(2)
    });
    if (data.bmi !== "" && data.bmi < 18.5) {
      setData({
        result: "過輕",
        bmi: data.bmi,
        weight: data.weight,
        height: data.height
      });
    } else if (data.bmi !== "" && data.bmi >= 18.5 && data.bmi < 24) {
      setData({
        result: "理想",
        bmi: data.bmi,
        weight: data.weight,
        height: data.height
      });
    } else if (data.bmi !== "" && data.bmi >= 24 && data.bmi < 27.9) {
      setData({
        result: "過重",
        bmi: data.bmi,
        weight: data.weight,
        height: data.height
      });
    } else if (data.bmi !== "" && data.bmi >= 27.9) {
      setData({
        result: "肥胖",
        bmi: data.bmi,
        weight: data.weight,
        height: data.height
      });
    }
    addReport(data);
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
              type="text"
              value={data.height}
              onChange={e => setData({ ...data, height: e.target.value })}
              placeholder="請輸入身高"
            />
          </div>
          <div className="header-input">
            <p>體重kg</p>
            <input
              type="text"
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
