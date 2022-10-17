import React, { useContext, useState, useEffect } from 'react'
import HomeView from './HomeView'
import { PointsContext } from '../../Global/PointsContext'

const HomeController = () => {

    const context = useContext(PointsContext);

    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");

    useEffect(() => {
        if (player1 && (player2 === "Scissors" || player2 === "Paper")){
            window.location.href="/duel"
        }
    }, [player1, player2])

    const buttonDev = () => {
        alert("System in development")
    }

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

        if (player2 === "" && (player1 === "Paper" || player1 === "Scissors" || player1 === "Rock")){
            setPlayer2("none2")
            alert("Player 2 SELECTED");
        } else {
            alert("Player 1 has not chosen yet")
        }

        if (player2 === "Scissors" || player2 === "Paper" || player2 === "Rock"){
            alert("Player 2 has already made his choice");
        }
    }

    const buttonPaper = () => {

        //Player 1 //
        if (player1 === "none"){
            setPlayer1("Paper");
            alert("SELECTED PAPER");
        } 

        if (player1 === "Paper") {
            alert("You've already made your choice");
        }

        // Player 2
        if (player2 === "none2"){
            setPlayer2("Paper");
            alert("SELECTED PAPER");
        } 

        if (player2 === "Paper") {
            alert("You've already made your choice");
        }
    }

    const buttonScissors = () => {

        // Player 1 //
        if (player1 === "none"){
            setPlayer1("Scissors");
            alert("SELECTED SCISSORS")
        } 

        if (player1 ==="Scissors") {
            alert("You've already made your choice")
        }

        // Player 2 //
        if (player2 === "none2"){
            setPlayer2("Scissors");
        } 
        
        if (player2 ==="Scissors") {
            alert("You've already made your choice")
        }
    }

    const buttonRock = () => {

        // Player 1 //
        if (player1 === "none"){
            setPlayer1("Rock");
            alert("SELECTED ROCK")
        } 

        if (player1 ==="Rock") {
            alert("You've already made your choice")
        }

        // Player 2 //
        if (player2 === "none2"){
            setPlayer2("Rock");
        } 
        
        if (player2 ==="Rock") {
            alert("You've already made your choice")
        }
    }

    return (
        <HomeView
        points={context.points}

        buttonDev={buttonDev}
        buttonPaper={buttonPaper}
        buttonScissors={buttonScissors}
        buttonRock={buttonRock}

        buttonPlaying1={buttonPlaying1}
        buttonPlaying2={buttonPlaying2}/>
    )
}

export default HomeController;
