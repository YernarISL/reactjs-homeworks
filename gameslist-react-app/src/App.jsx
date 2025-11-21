import React from "react";
import "./App.css";
import GameList from "./components/GameList/GameList";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs";
import GameDetails from "./components/GameDetails/GameDetails";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { AuthProvider } from "./AuthContext";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/games" element={<GameList />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/game/:id" element={<GameDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
