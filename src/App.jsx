import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./components/about";
import Editor from "./components/editor";
import Home from "./components/home";
import Navbar from "./components/navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(
      window.localStorage.getItem("ai-writing-assistant-auth") === "true",
    );
  }, []);

  const handleLogin = () => {
    window.localStorage.setItem("ai-writing-assistant-auth", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("ai-writing-assistant-auth");
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/editor"
            element={<Editor />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
