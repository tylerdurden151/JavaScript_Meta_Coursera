import { useState } from "react";
import Fruits from "./components/Fruits";
import FruitsCounter from "./components/FruitsCounter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits />
      <FruitsCounter />
    </div>
  );
}
export default App;
