<<<<<<< HEAD
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
=======
import React from 'react'
import {Route,Routes} from 'react-router-dom'

import Home from "./Home/Home"
import Profile from './Profile/Profile'

const Main = () => {
  return (
  <main>
    <Routes>
      <Route element={<Home />} path={"/"} />
      <Route element={<Profile />} path={"/profile"} />
    </Routes>
  </main>
>>>>>>> 06e18c51f15c538515eb6eb7912964daf1bb197f
  )
}

export default Main