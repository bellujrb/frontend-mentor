import React, { useContext, useState, useEffect } from 'react'
import HomeView from './HomeView'
import { GamerContext } from '../../Global/GamerContext'

const HomeController = () => {

    const context = useContext(GamerContext);

    const values = ["Scissors", "Paper", "Rock"]

    useEffect(() => {
        if (context?.player1 && (context?.player2 === "Scissors" || context?.player2 === "Paper")){
            window.location.href="/duel"
        }
    }, [context?.player1, context?.player2])

    const buttonDev = () => {
        alert("System in development")
    }

    const buttonPlaying1 = () =>{

        if (context?.player1 === ""){
            context?.setPlayer1("none")
            alert("Player 1 SELECTED");
        }

        if (values.includes(context?.player1)) {
            alert("Player 1 has already made his choice");
        }
    }

    const buttonPlaying2 = () => {

        if (context?.player2 === "" && (values.includes(context?.player2))){
            context?.setPlayer2("none2")
            alert("Player 2 SELECTED");
        } else {
            alert("Player 1 has not chosen yet")
        }

        if (context?.player2 === values.includes(context?.player2)){
            alert("Player 2 has already made his choice");
        }
    }

    const buttonPaper = () => {

        //Player 1 //
        if (context?.player1 === "none"){
            context?.setPlayer1("Paper");
            alert("SELECTED PAPER");
        } 

        if (context?.player1 === "Paper") {
            alert("You've already made your choice");
        }

        // Player 2
        if (context?.player2 === "none2"){
            context?.setPlayer2("Paper");
            alert("SELECTED PAPER");
        } 

        if (context?.player2 === "Paper") {
            alert("You've already made your choice");
        }
    }

    const buttonScissors = () => {

        // Player 1 //
        if (context?.player1 === "none"){
            context?.setPlayer1("Scissors");
            alert("SELECTED SCISSORS")
        } 

        if (context?.player1 ==="Scissors") {
            alert("You've already made your choice")
        }

        // Player 2 //
        if (context?.player2 === "none2"){
            context?.setPlayer2("Scissors");
        } 
        
        if (context?.player2 ==="Scissors") {
            alert("You've already made your choice")
        }
    }

    const buttonRock = () => {

        // Player 1 //
        if (context?.player1 === "none"){
            context?.setPlayer1("Rock");
            alert("SELECTED ROCK")
        } 

        if (context?.player1 ==="Rock") {
            alert("You've already made your choice")
        }

        // Player 2 //
        if (context?.player2 === "none2"){
            context?.setPlayer2("Rock");
        } 
        
        if (context?.player2 ==="Rock") {
            alert("You've already made your choice")
        }
    }

    return (
        <HomeView
        points={context?.points}
        player1={context?.player1}
        player2={context?.player2}
        values={values}

        buttonDev={buttonDev}
        buttonPaper={buttonPaper}
        buttonScissors={buttonScissors}
        buttonRock={buttonRock}

        buttonPlaying1={buttonPlaying1}
        buttonPlaying2={buttonPlaying2}/>
    )
}

export default HomeController;