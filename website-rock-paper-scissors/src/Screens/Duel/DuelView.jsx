import React from 'react';
import './Duel.css'
import logo from '../../Images/logo.svg'
import play1 from '../../Images/play1.png'
import play2 from '../../Images/play2.png'
import play3 from '../../Images/play3.png'


export default function HomeView ( {buttonPlayAgain, points} ){

    return (
        <div className='home'>
        
        <div className='score'>
            <img src={logo}/>
            <div id='score2'>
                <h2>Score</h2>
                <p>{points}</p>
            </div>
        </div>

        <div className='duel'>
        
            <div className='picked1'>
                <h2>YOU PICKED</h2>
                <img src={play1}/>
            </div>

            <div className='results'>
                <h2>YOU LOSE</h2>
                <button onClick={buttonPlayAgain}>PLAY AGAIN</button>
            </div>

            <div className='picked1'>
                <h2>THE HOUSE PICKED</h2>
                <img src={play2}/>
            </div>
        </div>

        </div>
    )
}