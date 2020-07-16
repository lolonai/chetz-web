import React from "react";
import "./App.scss";
import Routes from "./routes";
import Navbar from "./Components/Nav";
import Footer from "./Components/Footer";

function App() {
  require("dotenv").config();
  return (
    <div className="app-container">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
