import React from "react";
import { useState, useEffect, useContext } from "react";
import { GameStateContext } from "../contexts/GameStateContext";
import volcano from "../images/volcano.jpg"
import shield from "../images/shield.jpg"
import statue from "../images/statue.jpg"

function PopUpMenu(){      
    
    
    const {setCurrentlySelected, cordinates} = useContext(GameStateContext)
    
    useEffect(() => {
        console.log(cordinates)
    },[cordinates])

    if(cordinates.x == null || cordinates.y == null){

    }
    else {
        return(
            <>
            <div className="h-96 w-96 bg-green-300 absolute flex flex-col" style={{left: `${cordinates.x}px`, top: `${cordinates.y}px`}}>
                <span className="bg-cyan-400 mt-4 flex flex-row py-1 hover:bg-cyan-800" onClick={() => setCurrentlySelected("Volcano")}>
                    <img src={volcano} alt="" className="object-cover h-full"/>
                    <p className="text-black text-7xl">Volcano</p>
                </span>
                <span className="bg-cyan-400 mt-12 flex flex-row py-1 hover:bg-cyan-800" onClick={() => setCurrentlySelected("Shield")}>
                <img src={shield} alt="" className="object-cover h-full"/>
                    <p className="text-black text-7xl">Shield</p>
                </span>
                <span className="bg-cyan-400 mt-12 flex flex-row py-1 hover:bg-cyan-800" onClick={() => setCurrentlySelected("Statue")}>
                <img src={statue} alt="" className="object-cover h-full"/>
                    <p className="text-black text-7xl ">Statue</p>
                </span>
            </div>
            </>
        )
    }



}

export default PopUpMenu;