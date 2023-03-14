import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About/About'
import Home from './Home/Home'
import Layout from './Layout/Layout'
import Lodging from './Lodging/Lodging'
import NotFound from './NotFound/NotFound'

function PublicRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path='/' element={<Home/>} /> 
        <Route path='/about' element={<About/>} /> 
        <Route path='/lodging' element={<Lodging/>} /> 
        <Route path='/error' element={<NotFound/>} /> 
      </Route>


    </Routes>
    )
}

export default PublicRouter