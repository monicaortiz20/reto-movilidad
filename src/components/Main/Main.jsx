import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from '../Main/Home/Home';
import Profile from '../Main/Profile/Profile';
import Login from '../../firebase/Login/Login';
import Register from '../../firebase/Register/Register';
import Store from '../../firebase/Store'


const Main = () => {
  return (
    <main>
      <Routes>
        <Route element={<Home/>} path={'/'}>Home</Route>
        <Route element={<Profile/>} path={'/profile'}>Profile</Route>
        <Route element={<Login/>} path={'/login'}>Login</Route>
        <Route element={<Register/>} path={'/register'}>Register</Route>
        
        <Route element={<Store/>} path={'/store'}>Store</Route>
      </Routes>
    </main>
  )
}

export default Main