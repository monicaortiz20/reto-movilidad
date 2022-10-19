import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from '../Main/Home/Home';
import Profile from '../Main/Profile/Profile';
import Login from './Login/Login';
import Register from './Register/Register';
// import ProtectedRoute from '../../firebase/ProtectedRoute/ProtectedRoute';


const Main = () => {
  return (
    <main>
      <Routes>
        <Route element={<Home/>} path={'/'}>Home</Route>
        {/* <Route element={<ProtectedRoute><Profile/></ProtectedRoute>} path={'/profile'}>Profile</Route> */}
        <Route element={<Profile/>} path={'/profile'}>Perfil</Route>
        <Route element={<Login/>} path={'/login'}>Login</Route>
        <Route element={<Register/>} path={'/register'}>Register</Route>
      </Routes>
    </main>
  )
}

export default Main