import React, { useContext } from 'react';
import './Home.css'
import logo from '../../Images/logo.svg'
import triangle from '../../Images/triangle.svg'
import play1 from '../../Images/play1.png'
import play2 from '../../Images/play2.png'
import play3 from '../../Images/play3.png'


export default function HomeView ( {points, buttonDev, buttonPaper,
    buttonScissors, buttonRock, buttonPlaying1, buttonPlaying2} ){

    return (
        <div className='home'>

        <div className='line1'>

        <div className='score'>
            <img src={logo}/>
            <div id='score2'>
                <h2>Score</h2>
                <p>{points}</p>
            </div>
        </div>     

        <div className='playings'>     
        <button className='buttonPlaying' onClick={buttonPlaying1}>1P</button>
        <button className='buttonPlaying' onClick={buttonPlaying2}>2P</button>
        <button className='buttonPlaying' onClick={buttonDev}>2P I.A</button>
        </div>   

        </div>
        <div className='game'>

        <div className='plays'>
            <input type="image" src={play1} onClick={buttonPaper}/>
            <input type="image" src={play2} onClick={buttonScissors}/>
        </div>

        <div className='plays2'>
            <input type="image" src={play3} onClick={buttonRock}/>
        </div>

        <div id='triangle'>
            <img src={triangle}/>
        </div>

        </div>

        </div>
    )
}