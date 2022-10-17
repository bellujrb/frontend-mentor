import React, { useContext, useState, useEffect } from 'react'
import HomeView from './HomeView'
import { PointsContext } from '../../Database/PointsContext'

const HomeController = () => {

    const context = useContext(PointsContext);

    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");

    useEffect(() => {
        if (player1 && (player2 === "Scissors" || player2 === "Paper")){
            window.location.href="http://belluzzo-rock-paper-scissors-peach.vercel.app/duel"
        }
    }, [player1, player2])

    const buttonPlaying1 = () =>{

        if (player1 === ""){
            setPlayer1("none")
            alert("Player 1 SELECTED");
        }

        if (player1 === "Scissors" || player1 === "Paper" || player1 === "Rock"){
            alert("Player 1 has already made his choice");
        }
    }

    const buttonPlaying2 = () => {

        if (player2 === ""){
            setPlayer2("none2")
            alert("Player 2 SELECTED");
        }

        if (player2 === "Scissors" || player2 === "Paper" || player2 === "Rock"){
            alert("Player 2 has already made his choice");
        }
    }

    const buttonPaper = () => {
        if (player1 === "none"){
            setPlayer1("Paper");
            alert("SELECTED PAPER");
        } 

        if (player1 === "Paper") {
            alert("You've already made your choice")
        }

        if (player2 === "none2"){
            setPlayer2("Paper");
            alert("SELECTED PAPER");
        } 
        
        if (player2 === "Paper") {
            alert("You've already made your choice")
        }
    }

    const buttonScissors = () => {

        if (player1 === "none"){
            setPlayer1("Scissors");
            alert("SELECTED SCISSORS")
        } 

        if (player1 ==="Scissors") {
            alert("You've already made your choice")
        }

        if (player2 === "none2"){
            setPlayer2("Scissors");
        } 
        
        if (player2 ==="Scissors") {
            alert("You've already made your choice")
        }
    }

    return (
        <HomeView
        points={context.points}

        buttonPaper={buttonPaper}
        buttonScissors={buttonScissors}

        buttonPlaying1={buttonPlaying1}
        buttonPlaying2={buttonPlaying2}/>
    )
}

export default HomeController;
