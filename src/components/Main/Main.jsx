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
  )
}

export default Main