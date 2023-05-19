import React, { useState, useEffect, useContext} from "react";  
import { GameStateContext } from "../contexts/GameStateContext";
import volcano from "../images/volcano.jpg"
import shield from "../images/shield.jpg"
import statue from "../images/statue.jpg"
import PopUpMenu from "./PopUpMenu";

function Game(){
        const {userName, currentlySelected, setCordinates} = useContext(GameStateContext);

        useEffect(() => {
                console.log(userName);
        }, [])

        const [hits, setHits] = useState({
            volcano: {
                isHit: false,
                opacity: 100,
            },
            shield: {
                isHit: false,
                opacity: 100,
            },
            statue: {
                isHit: false,
                opacity: 100,
            }

        })
        const imageStyle = "object-cover h-full";

        useEffect(() => {
                switch(currentlySelected) {
                    case "Volcano":
                            setHits((hits) => ({...hits, [volcano]: {isHit: true, opacity: 25}}))
                            
                        break;
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
                        <div className="bg-cyan-500 opacity-80 h-12 w-12 relative -top-36"></div>
                        <div className="w-screen h-44  bg-green-700 mt-20 flex flex-row justify-center">
                            <div className="h-44 w-44 bg-blue-300 mr-20 ml-64 overflow-hidden">
                                <img className={`${imageStyle}`}  style={{display: hits.volcano.isHit ? "100" : "25"}} src={volcano} alt="" />
                            </div>
                            <div  className="h-44 w-44 bg-blue-300 mr-20">
                            <img className={`${imageStyle}`} src={shield} alt="" />
                            </div>
                            <div  className="h-44 w-44 bg-blue-300 mr-20">
                            <img className={`${imageStyle}`} src={statue} alt="" />
                            </div>
                        </div>
                    </div>
                </>
            )
        
}

export default Game;