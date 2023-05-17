import React, {useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { GameStateContext } from "../contexts/GameStateContext";



function Home() {

    const { renderMode, setRenderMode } = useContext(GameStateContext);
    const navigate = useNavigate();

    const goRegister = () => {
        navigate("/makeUser", {replace: false});
    }
    if(renderMode === 'home'){
        return(
            <>
        
        <div className="flex w-auto h-screen flex-col  items-center bg-white">
            <h1 className="text-9xl text-black font-bold text-opacity-85 mb-10 mt-96 pt-48">Welcome to WhereDaValdoAt</h1>
            <p className="text-5xl text-black text-opacity-65 mb-24">Game where you will try to find waldo and his homies on the image provided</p>
            <button className=
            "rounded-3xl bg-black text-4xl text-white p-10 hover:bg-white hover:text-black hover:border hover:border-5 hover:border-black"
            onClick={() => goRegister()}>Start scouting!</button>
        </div>
        </>
            
        )
    }
    else {

    }
    
}

export default Home;