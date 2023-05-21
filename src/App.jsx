import React from 'react'
import { useState, useEffect, useContext } from 'react'
import Home from './components/Home'
import Nav from './components/Nav'
import { GameStateContextProvider } from './contexts/GameStateContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MakeUser from './components/MakeUser'
import Game from './components/Game'
import ShowScore from './components/ShowScore'
function App() {
  

  return (
    <>
    <GameStateContextProvider>
    <Nav />
    <BrowserRouter>
    
      <Routes>
        <Route path="/makeUser" element={<MakeUser />}></Route>
        <Route path="/game" element={<Game />}></Route>
        <Route path="/ShowScore" element={<ShowScore />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    
    
    </BrowserRouter>
   
    </GameStateContextProvider>
    </>
  )
}

export default App
