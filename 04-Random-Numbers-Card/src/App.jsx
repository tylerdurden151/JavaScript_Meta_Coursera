import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from './components/Card'
import './App.css'

const randNum = () => Math.floor(Math.random() * 100) + 1;

function App() {
    return (
        <div>
            <h1>Task: Add three Card elements</h1>
            <Card num={randNum()} />
            <Card num={randNum()} />
            <Card num={randNum()} />
        </div>
    );
}
export default App
