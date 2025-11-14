import React from 'react'
import './App.css'
import GameList from './components/GameList/GameList'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs'
import GameDetails from './components/GameDetails/GameDetails'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/games" element={<GameList/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/game/:id" element={<GameDetails/>}/>
          <Route path="/login" element={<GameDetails/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
