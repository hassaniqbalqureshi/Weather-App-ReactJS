import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="navbar">
        <a href="#home">Weather Forecast (5 DAYS)</a>
      </div>
      <br />
      <br />
      <Weather defaultCity="Islamabad" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
