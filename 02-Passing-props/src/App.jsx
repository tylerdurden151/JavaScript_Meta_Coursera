import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Heading from './components/Heading'
import './App.css'

function App() {
    return (
        <div className="App">
            <Heading firstName="Bob" />
            <Heading firstName="John" />
        </div>
    );
};

export default App
