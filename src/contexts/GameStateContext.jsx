import React, {useContext, useState, useEffect, createContext} from "react";
import volcano from "../images/volcano.jpg"
import shield from "../images/shield.jpg"
import statue from "../images/statue.jpg"



export const GameStateContext = createContext(null);

export const GameStateContextProvider = (props) => {

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
    
    const contextValue = {currentlySelected, setCurrentlySelected, userName, setUserName, cordinates, setCordinates, hits, setHits, squareHit, setSquareHit}

    return <GameStateContext.Provider value={contextValue}>
        {props.children};
    </GameStateContext.Provider>
}


