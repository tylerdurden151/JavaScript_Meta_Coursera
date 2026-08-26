import { useState } from "react";
import HomePage from "./components/HomePage";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);

  return (
    <>
      {loggedIn ? (
        <div>
          <HomePage />
          <LogoutButton logout={logout} />
        </div>
      ) : (
        <LoginButton login={login} />
      )}
    </>
  );
}
export default App;
