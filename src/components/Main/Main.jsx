<<<<<<< HEAD
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
=======
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
>>>>>>> ef5123897bee28adbd4ac613bafce899d55b586f
  )
}

export default Main