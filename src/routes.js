import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './composants/Pages/Home';
import Players from './composants/Pages/Players';
function MyRouter() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='players' element={<Players />} />
        </Routes>
    )
}

export default MyRouter