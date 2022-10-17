import React from 'react';
import HomeController from '../Screens/Home/HomeController';
import DuelController from '../Screens/Duel/DuelController';
import { Routes, Route } from 'react-router-dom';
import { GamerContextProvider } from '../Global/GamerContext';

const routes = () => {
    return (
        <GamerContextProvider>
            <Routes>
                <Route path='/' element={<HomeController/>} />
                <Route path='*' element={<DuelController/>} />
                
            </Routes>
        </GamerContextProvider>
    )
}

export default routes;