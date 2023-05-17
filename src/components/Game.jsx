import React, { useState, useEffect, useContext} from "react";  
import { GameStateContext } from "../contexts/GameStateContext";


function Game(){
        const {userName} = useContext(GameStateContext);

        useEffect(() => {
                console.log(userName);
        }, [])
        
            return (
                <>
                    <div className="bg-white h-screen w-screen pt-64">
                        <img className="h-3/4 w-auto ml-44" src="https://wallpaperaccess.com/full/2687204.jpg"></img>
                        <p className="text-black text-9xl">{userName}</p>
                    </div>
                </>
            )
        
}

export default Game;