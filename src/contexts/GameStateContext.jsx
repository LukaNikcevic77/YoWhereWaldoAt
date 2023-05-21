import React, {useContext, useState, useEffect, createContext} from "react";
import volcano from "../images/volcano.jpg"
import shield from "../images/shield.jpg"
import statue from "../images/statue.jpg"



export const GameStateContext = createContext(null);

export const GameStateContextProvider = (props) => {
    const [flip, setFlip] = useState(false);
    const [hitCounter, setHitCounter] = useState(0);
    const [currentlySelected, setCurrentlySelected] = useState('');
    const [squareHit, setSquareHit] = useState('');
    
    const [hits, setHits] = useState([
        {
            isHit: false,
            color: "black",
            url: volcano,
            name: "Volcano"
        },
        {
            isHit: false,
            color: "black",
            url: shield,
            name: "Shield"
        },
        {
            isHit: false,
            color: "black",
            url: statue,
            name: "Statue"
        }

    ])
    const [userName, setUserName] = useState('');
    const [cordinates, setCordinates] = useState({});
    
    const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

    useEffect(() => {
        setStartTime(Date.now());

        

    }, [userName])

    useEffect(() => {
        
        const timer = setInterval(() => {
            setCurrentTime(Date.now()); 
      
            
            if (hitCounter > 2) {
              setEndTime(Date.now()); // Set the end time
              clearInterval(timer); // Clear the timer
              setFlip(true);
              
            }
          }, 1000);
      
          return () => {
            clearInterval(timer); // Clear the timer when the component is unmounted
          };
    }, [hitCounter])
    const formatTime = (time) => {
        const totalSeconds = Math.floor((time - startTime) / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
    
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      };

    const contextValue = {currentlySelected, flip, setCurrentlySelected, userName, setUserName, cordinates, setCordinates, hits, setHits, squareHit, setSquareHit, currentTime, formatTime, endTime, setHitCounter, hitCounter}

    return <GameStateContext.Provider value={contextValue}>
        {props.children};
    </GameStateContext.Provider>
}


