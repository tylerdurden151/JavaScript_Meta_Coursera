import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import './App.css'

function Heading(props) {
  return <h1>{props.title}</h1>;
}

function App() {
  return (
    <div className="App">
      This is the starting code for "Your first component" ungraded lab
      <Heading title="Hello!" />
    </div>
  );
}
 
export default App;
