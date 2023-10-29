import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import TourDetails from '../pages/TourDetails'
import SearchResult from '../pages/SearchResult'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Tour from '../pages/Tour'
import About from '../pages/About'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'></Navigate>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/tour' element={<Tour/>}></Route>
        <Route path='/tour/:id' element={<TourDetails></TourDetails>}></Route>
        <Route path='/tour/search' element={<SearchResult></SearchResult>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/about' element={<About/>}></Route>

    </Routes>
  )
}

export default Routers