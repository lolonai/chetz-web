import React from "react";
import "./App.scss";
import Routes from "./routes";
import Navbar from "./Components/Nav";

function App() {
  require("dotenv").config();
  return (
    <div className="app-container">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
