import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../screens/home/Home'
import CarDetail from '../screens/car_detail/carDetail'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path='/' />
            <Route element={<CarDetail/>} path='/car/:id' />

            <Route element={<div>Not found</div>} path='*' />
        </Routes>
    </BrowserRouter>
  )
}

export default Router