import React, { useState, useEffect, useContext} from "react";  
import { GameStateContext, GameStateContextProvider } from "../contexts/GameStateContext";
import Game from "./Game";


function ShowScore(){

    const {userName, endTime, formatTime} = useContext(GameStateContext);

    return(
        <>
            <div className="flex w-auto h-screen flex-col  items-center bg-white">
            <h1 className="text-9xl text-black font-bold text-opacity-85 mb-10 mt-96 pt-48">Your name:</h1>
            <p className="text-5xl text-black text-opacity-65 mb-24">{userName}</p>
            <h1 className="text-9xl text-black font-bold text-opacity-85 mb-10 mt-96 pt-48">Your time:</h1>
            <p className="text-5xl text-black text-opacity-65 mb-24">{formatTime(endTime)}</p>
            <button className=
            "rounded-3xl bg-black text-4xl text-white p-10 hover:bg-white hover:text-black hover:border hover:border-5 hover:border-black"
            >See Leaderboards!</button>
        </div>
        </>
    )

}

export default ShowScore;