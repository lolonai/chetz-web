import React from "react";
import "./App.scss";
import Routes from "./routes";
import Navbar from "./Components/Nav";

window.addEventListener("load", () => {
  document.body.classList.remove("clean-transition");
});

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
