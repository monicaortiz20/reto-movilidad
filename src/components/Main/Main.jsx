import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from '../Main/Home/Home';
import Profile from '../Main/Profile/Profile';
import Login from '../../firebase/Login/Login';



const Main = () => {
  return (
    <main>
      <Routes>
        <Route element={<Home/>} path={'/'}>Home</Route>
        <Route element={<Profile/>} path={'/profile'}>Profile</Route>
        <Route element={<Login/>} path={'/login'}></Route>
        {/* <Route element={<SignOut/>} path={'/signout'}></Route>
        <Route element={<Username/>} path={'u/:username'}></Route>  */}
      </Routes>

    </main>
  )
}

export default Main