import React, { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

export const GamerContext = createContext();

export const GamerContextProvider = (props) => {

    const [points, setPoints] = useState(0);

    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");


    return (
        <GamerContext.Provider
        value={{
            setPoints,
            points,
            setPlayer1,
            player1,
            setPlayer2,
            player2
        }}
        >
            {props.children}
            </GamerContext.Provider>
    );
};