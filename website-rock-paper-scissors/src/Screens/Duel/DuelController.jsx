import React, { useContext } from 'react';
import DuelView from './DuelView';
import { GamerContext } from '../../Global/GamerContext'

const DuelController = () => {

    const context = useContext(GamerContext);

    const buttonPlayAgain = () => {
        window.location.pathname = "/"
    }

    const buttonDev = () => {
        alert("System in development")
    }

    return (
        <DuelView
        points={context.points}
        buttonDev={buttonDev}
        buttonPlayAgain={buttonPlayAgain}
        />
    )
}

export default DuelController;
