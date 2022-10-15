import React from 'react'
import {BrowserRouter} from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>D
      <Header/>
      <Main/>
      <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App