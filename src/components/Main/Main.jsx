import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from '../Main/Home/Home';
import Profile from '../Main/Profile/Profile';


const Main = () => {
  return (
    <main>
      <Routes>
        <Route element={<Home/>} path={'/'}>Home</Route>
        <Route element={<Profile/>} path={'/profile'}>Profile</Route>
      </Routes>
    </main>
  )
}

export default Main