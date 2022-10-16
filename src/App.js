import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import { AuthProvider } from '../src/context/authContext';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
      </AuthProvider>

    </div>
  )
}

export default App