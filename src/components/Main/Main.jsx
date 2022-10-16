import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from '../Main/Home/Home';
import Profile from '../Main/Profile/Profile';
import Login from '../../firebase/Login/Login';
import Register from '../../firebase/Register/Register';
import { AuthProvider } from '../../context/authContext';




const Main = () => {
  return (
    <main>
      <AuthProvider>
      <Routes>
        <Route element={<Home/>} path={'/'}>Home</Route>
        <Route element={<Profile/>} path={'/profile'}>Profile</Route>
        <Route element={<Login/>} path={'/login'}>Login</Route>
        <Route element={<Register/>} path={'/register'}>Register</Route>
        {/* <Route element={<Username/>} path={'u/:username'}></Route>  */}
      </Routes>
      </AuthProvider>

    </main>
  )
}

export default Main