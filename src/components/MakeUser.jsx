import React, { useState, useEffect, useContext} from "react";  
import { GameStateContext } from "../contexts/GameStateContext";
import { useNavigate } from "react-router-dom";

function MakeUser(){

    const { userName, setUserName } = useContext(GameStateContext);
    const navigate = useNavigate();
    const startGame = () => {
        navigate("/game", {replace: true});
      
    }
    return (
        <>
        <div className="flex w-auto h-screen flex-col  items-center  bg-white">
            <h1 className="text-black text-9xl font-bolb mt-96">Enter your username:</h1>
            <input 
            className="text-white outline-none rounded-3xl bg-black text-8xl mt-36 p-8 focus:outline-none" type="text" minLength={4} maxLength={20}
             onChange={(e) => setUserName(e.target.value)}></input>
            <button className=
            "rounded-3xl bg-black text-4xl text-white p-10 hover:bg-white hover:text-black hover:border hover:border-5 hover:border-black mt-24"
           onClick={() => startGame() }> Find homie</button>
        </div>
        </>
    )
}

export default MakeUser;