import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // Declare a state variable 'num' and a function 'setNum' to update the value of 'num'.
  // Initial value of num is set to 0.
  const [num, setNum] = useState(0);

  return (
    // The main container for the app content
    <div className="app-container">
      {/* Display the current value of the 'num' variable */}
      <h1 className="counter-heading">Current Number: {num}</h1>
      
      {/* Container for buttons, to allow adding or subtracting 1 */}
      <div className="button-container">
        {/* Button to increment the 'num' value by 1 */}
        <button 
          className="counter-button" 
          onClick={() => setNum(num + 1)}  // onClick calls setNum with num + 1 to increment the value
        >
          Add 1
        </button>
        
        {/* Button to decrement the 'num' value by 1 */}
        <button 
          className="counter-button" 
          onClick={() => setNum(num - 1)}  // onClick calls setNum with num - 1 to decrement the value
        >
          Subtract 1
        </button>
      </div>
    </div>
  );
}

export default App
