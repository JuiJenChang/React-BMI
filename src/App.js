import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [report, setReport] = useState([]);

  const addReport = data => {
    setReport([...report, data])
    console.log(report);
  };

  const removeReport = key => {
    const newReport = report.filter((data, i) => {
      return i !== key;
    });
    setReport(newReport);
  };

  return (
    <div>
      <Header addReport={addReport} />
      <Main report={report} removeReport={removeReport} />
      <Footer />
    </div>
  );
}

export default App;
