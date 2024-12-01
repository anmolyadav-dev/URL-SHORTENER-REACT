import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SnowFlake from "./components/SnowFlake";
import Card from "./components/Card";
function App() {
  return (
    <>
      <SnowFlake />
      <h2 className="text-center my-20 text-7xl font-bold text-blue-500 ">
        URL - SHORTNER
      </h2>
      <div className="flex items-center justify-center">
        <Card />
      </div>
    </>
  );
}

export default App;
