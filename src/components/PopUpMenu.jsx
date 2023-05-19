import React from "react";
import { useState, useEffect, useContext } from "react";
import { GameStateContext } from "../contexts/GameStateContext";


function PopUpMenu(){      
    
    
    const {setCurrentlySelected, cordinates, hits, setHits} = useContext(GameStateContext)
    
    useEffect(() => {
        console.log(cordinates)
    },[cordinates])

    if(cordinates.x == null || cordinates.y == null){

    }
    else {
        return(
            <>
            
            <div className="h-96 w-96 bg-gray-600 absolute flex flex-col" style={{left: `${cordinates.x}px`, top: `${cordinates.y}px`}}>
                
            {hits.map((item) => {
                return (
                <span className="mt-4 flex flex-row py-1 hover:cursor-pointer hover:opacity-40" style={{backgroundColor: item.color}} onClick={() => setCurrentlySelected("Volcano")}>
                    <img src={item.url} alt="" className="object-cover h-full"/>
                    <p className="text-white text-7xl">{item.name}</p>
                </span>)
            })}
            </div>
            </>
        )
    }



}

export default PopUpMenu;