import React, { useState } from 'react';
import { createContext } from 'react';

export const PointsContext = createContext({
    points: 20,
    onChangePoints: () => {},
});

export const PointsContextProvider = (props) => {

    const [points, setPoints] = useState(0);

    const onChangePoints = (newPoints) => {
        setPoints(newPoints);
    }

    return (
        <PointsContext.Provider
        value={{
            points: points,
            onChangePoints: onChangePoints,
        }}
        >
            {props.children}
            </PointsContext.Provider>
    );
};