import React, { useContext } from 'react';
import { PointsContext } from '../../Database/PointsContext';
import DualView from '../Duel/DuelView';

const DuelController = () => {

    const context = useContext(PointsContext);

    const buttonPlayAgain = () => {
        window.location.href="http://belluzzo-rock-paper-scissors-peach.vercel.app"
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
