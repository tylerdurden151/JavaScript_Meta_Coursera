import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  const fetchData = (url) => fetch(url);

  useEffect(() => {
    fetchData("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]));
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{ padding: "40px" }}>
      <h1>Customer data</h1>
      <h2>First Name: {user.name.first}</h2>
      <img src={user.picture.large} alt="User" />
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;
