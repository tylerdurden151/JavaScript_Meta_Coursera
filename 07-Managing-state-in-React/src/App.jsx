import { useState } from "react";
import Fruits from "./components/Fruits";
import FruitsCounter from "./components/FruitsCounter";
import "./App.css";

// componets are rendered in the order they are called in the return statement of the App component. The Fruits component is rendered first, followed by the FruitsCounter component. This means that the list of fruits will be displayed before the total count of fruits.
function App() {
  const [fruits] = useState([
    { fruitName: "apple", id: 1 },
    { fruitName: "apple", id: 2 },
    { fruitName: "plum", id: 3 },
  ]);

  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
}
export default App;
