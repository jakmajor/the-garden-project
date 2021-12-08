import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from "./Navbar";
import LoginPage from './LoginPage.js';
import Home from "./components/home";

function App() {

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        {!user ?
          <Route exact path="/" element={<LoginPage setUser={setUser} />} />
        :
          <Route exact path="/" element={<Home user={user} />} />
        }
      </Routes>
    </div>
  );
}

export default App;
