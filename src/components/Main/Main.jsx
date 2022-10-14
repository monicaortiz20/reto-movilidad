import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from '../Main/Home/Home';
import Profile from '../Main/Profile/Profile';
import Routing from '../Main/Home/Routing';


const Main = () => {
  return (
    <main>
      <Routes>
        <Route element={<Home/>} path={'/'}>Home</Route>
        <Route element={<Profile/>} path={'/profile'}>Profile</Route>
        <Route element={<Routing/>} path={'/routing'}>Routing</Route>
      </Routes>
    </main>
  )
}

export default Main