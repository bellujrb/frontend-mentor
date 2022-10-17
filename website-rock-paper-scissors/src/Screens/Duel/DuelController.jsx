import React, { useContext } from 'react';
import { GamerContext } from '../../Global/GamerContext';
import DualView from './DuelView';

const DuelController = () => {

    const context = useContext(GamerContext);

    const buttonPlayAgain = () => {
        window.location.href="http://localhost:3000"
    }

    const buttonDev = () => {
        alert("System in development")
    }

    return (
        <DualView
        points={context.points}
        buttonDev={buttonDev}
        buttonPlayAgain={buttonPlayAgain}
        />
    )
}

export default DuelController;
