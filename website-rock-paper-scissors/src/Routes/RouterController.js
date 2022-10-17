import React from 'react';
import HomeController from '../Screens/Home/HomeController';
import DuelController from '../Screens/Duel/DuelController';
import { Routes, Route } from 'react-router-dom';

const routes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeController/>} />
            <Route path='*' element={<DuelController/>} />
            
        </Routes>
    )
}

export default routes;