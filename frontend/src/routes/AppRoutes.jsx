import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import ForgotPassword from '../pages/auth/ForgotPassword'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset-password' element={<ForgotPassword />} />
      </Routes>
    </>
  )
}

export default AppRoutes
