import React, { useState, useEffect, useContext} from "react";  
import { GameStateContext } from "../contexts/GameStateContext";
import volcano from "../images/volcano.jpg"
import shield from "../images/shield.jpg"
import statue from "../images/statue.jpg"
import PopUpMenu from "./PopUpMenu";

function Game(){
        const {userName, currentlySelected, setCordinates, hits, setHits, squareHit, setSquareHit} = useContext(GameStateContext);

        useEffect(() => {
                console.log(userName);
        }, [])
        useEffect(() => {
            console.log(squareHit)
        }, [squareHit]);
        
        const imageStyle = "object-cover h-full";

        useEffect(() => {
                switch(currentlySelected) {
                    case "Volcano":
                        if(squareHit === "Volcano"){
                            let newHits = [...hits];
                            newHits[0] = {
                            isHit: false,
                            color: 'rgba(0, 0, 0, 0.2)',
                            url: volcano,
                            name: "Volcano"
                            }
                            setHits([...newHits]);
                        }
                       
                    case "Shield":

                        break;
                    case "Statue":
                    
                    break;
                }
               
        }, [currentlySelected])
        
        const setMousePosition = (event) => {

            const mouseX = event.clientX;
            const mouseY = event.clientY;
            console.log(hits);

            setCordinates({x: mouseX, y: mouseY});
        }
            return (
                <>
                    <div className="bg-white h-screen w-screen pt-64 flex flex-col  items-center -ml-32" onClick={(e) => setMousePosition(e)}>
                        <PopUpMenu>

                        </PopUpMenu>
                        <img className="h-3/4 w-auto ml-44 -mt-20" src="https://wallpaperaccess.com/full/2687204.jpg" >
                        </img>
                        <div className="bg-cyan-500 opacity-80 h-12 w-12 relative -top-36" onClick={() => setSquareHit("Volcano")}></div>
                        
                    </div>
                </>
            )
        
}

export default Game;