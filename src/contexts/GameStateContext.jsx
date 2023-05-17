import React, {useContext, useState, useEffect, createContext} from "react";




export const GameStateContext = createContext(null);

export const GameStateContextProvider = (props) => {

    const [renderMode, setRenderMode] = useState('home');
    const [userName, setUserName] = useState('');

    const contextValue = {renderMode, setRenderMode, userName, setUserName}

    return <GameStateContext.Provider value={contextValue}>
        {props.children};
    </GameStateContext.Provider>
}


