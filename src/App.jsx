import React from 'react'
import { useState, useEffect, useContext } from 'react'
import Home from './components/Home'
import Nav from './components/Nav'
import { GameStateContextProvider } from './contexts/GameStateContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MakeUser from './components/MakeUser'
import Game from './components/Game'
import ShowScore from './components/ShowScore'
import Laderboards from './components/Laderboards'
import { Link } from 'react-router-dom'
function App() {
  

  return (
    <>
    <GameStateContextProvider>
    <BrowserRouter>
    <div className="flex flex-row justify-center space-x-28  w-screen p-10 px-0 bg-black ">
                <Link to="/Laderboards"><p className="text-5xl text-white text-opacity-65 -ml-20 hover: cursor-pointer">
                    Leaderbords
                </p>
                </Link>
                <Link to="/"><p className="text-5xl text-white text-opacity-65 hover: cursor-pointer" >
                    Home
                </p>
                </Link>
           
        </div>
      <Routes>
        <Route path="/makeUser" element={<MakeUser />}></Route>
        <Route path="/game" element={<Game />}></Route>
        <Route path="/ShowScore" element={<ShowScore />}></Route>
        <Route path="/Laderboards" element={<Laderboards />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    
    
    </BrowserRouter>
   
    </GameStateContextProvider>
    </>
  )
}

export default App
