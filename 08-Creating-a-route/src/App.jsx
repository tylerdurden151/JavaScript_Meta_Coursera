import { Routes, Route, Link } from "react-router";
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";
import AboutLittleLemon from "./components/AboutLittleLemon";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <Link to="/" className="nav-item">
          Homepage
        </Link>
        <Link to="/about" className="nav-item">
          About Little Lemon
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
      </Routes>
    </div>
  );
}
export default App;
