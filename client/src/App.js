import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from "./Navbar";
import LoginPage from './LoginPage.js';

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

  if (!user) return <LoginPage setUser={setUser} />;

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      
    </div>
  );
}

export default App;
