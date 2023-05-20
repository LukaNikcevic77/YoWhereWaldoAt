import React, { useState, useEffect, useContext} from "react";  
import { GameStateContext } from "../contexts/GameStateContext";
import volcano from "../images/volcano.jpg"
import shield from "../images/shield.jpg"
import statue from "../images/statue.jpg"
import PopUpMenu from "./PopUpMenu";

function Game(){
        const {userName, setCurrentlySelected, currentlySelected, setCordinates, hits, setHits, squareHit, setSquareHit, currentTime, formatTime, endTime, setHitCounter, hitCounter} = useContext(GameStateContext);
        

        useEffect(() => {
                console.log(userName);
        }, [])
        useEffect(() => {
            console.log(squareHit)
        }, [squareHit]);
        
        const imageStyle = "object-cover h-full";

        useEffect(() => {
            
            console.log(squareHit);
                switch(currentlySelected) {
                    case "Volcano":
                        if(squareHit === "Volcano"){
                            let newHits = [...hits];
                            if(newHits[0].isHit == false){
                                setHitCounter(hitCounter + 1);
                            }
                            newHits[0] = {
                            isHit: true,
                            color: 'rgba(0, 0, 0, 0.2)',
                            url: volcano,
                            name: "Volcano"
                            }
                            setHits([...newHits]);
                           
                        }
                        
                        setSquareHit('');
                            setCurrentlySelected('');
                         break;
                       
                    case "Shield":

                    if(squareHit === "Shield"){
                        let newHits = [...hits];
                        if(newHits[1].isHit == false){
                            setHitCounter(hitCounter + 1);
                        }
                        newHits[1] = {
                        isHit: true,
                        color: 'rgba(0, 0, 0, 0.2)',
                        url: shield,
                        name: "Shield"
                        }
                        setHits([...newHits]);
                       
                    }
                    
                    setSquareHit('');
                        setCurrentlySelected('');
                     break;
                    case "Statue":

                    if(squareHit === "Statue"){
                        let newHits = [...hits];
                        if(newHits[2].isHit == false){
                            setHitCounter(hitCounter + 1);
                        }
                        newHits[2] = {
                        isHit: true,
                        color: 'rgba(0, 0, 0, 0.2)',
                        url: statue,
                        name: "Statue"
                        }
                        setHits([...newHits]);
                        
                    }
                    
                    setSquareHit('');
                        setCurrentlySelected('');
                     break;
                     
                }
               
        }, [currentlySelected, squareHit])
        
        const setMousePosition = (event) => {
            
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            console.log(hits);

            setCordinates({x: mouseX, y: mouseY});
            
            
        }
        const resetSquare = () => {
                setTimeout(() => {
                    setSquareHit('');
                }, 100)
        }
            return (
                <>
                    <div className="bg-white h-screen w-screen pt-64 flex flex-col  items-center -ml-32" onClick={(e) => {setMousePosition(e), resetSquare()}}>
                        <PopUpMenu>

                        </PopUpMenu>
                        <img className="h-3/4 w-auto ml-44 -mt-20" src="https://wallpaperaccess.com/full/2687204.jpg" >
                        </img>
                        <div className="bg-cyan-500 opacity-80 h-12 w-12 relative  z-10 volcano" onClick={(e) => {e.stopPropagation(),setSquareHit("Volcano"), setMousePosition(e)}}></div>
                        <div className="bg-red-500 opacity-80 h-12 w-12 relative z-10 shield" onClick={(e) => {e.stopPropagation(),setSquareHit("Shield"), setMousePosition(e)}}></div>
                        <div className="bg-green-500 opacity-80 h-12 w-12 relative z-10 statue" onClick={(e) => {e.stopPropagation(),setSquareHit("Statue"), setMousePosition(e)}}></div>
                        
                    </div>
                    <p className="text-black text-9xl">{formatTime(endTime)}</p>
                </>
            )
        
}

export default Game;