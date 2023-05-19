import React, {useContext, useState, useEffect, createContext} from "react";




export const GameStateContext = createContext(null);

export const GameStateContextProvider = (props) => {

    const [currentlySelected, setCurrentlySelected] = useState('');
    const [userName, setUserName] = useState('');
    const [cordinates, setCordinates] = useState({});
    
    const contextValue = {currentlySelected, setCurrentlySelected, userName, setUserName, cordinates, setCordinates}

    return <GameStateContext.Provider value={contextValue}>
        {props.children};
    </GameStateContext.Provider>
}


