import React, { useEffect } from "react";
import "./App.scss";
import Routes from "./routes";
import Navbar from "./Components/Nav";



function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
