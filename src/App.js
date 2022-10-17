import React, {useState, useEffect} from 'react'
import {BrowserRouter} from 'react-router-dom';
import { authContext } from '../src/context/authContext';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../src/firebase/firebaseConfig'

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => {

    const [user, setUser] = useState('')

    const signup = (email, password) => 
    createUserWithEmailAndPassword(auth, email, password);

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        signOut(auth)
    }

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth,googleProvider)
    }
    //para renderizar el estado user, detecta si está autenticado/registrado o no
    // useEffect(() => {
    //    const unsubscribe =  onAuthStateChanged(auth, (currentUser)  => { 
    //         setUser(currentUser)
    //     })
    //     return () => unsubscribe();
    // },[])

    const functions = {
      signup,
      login,
      user,
      logout,
      loginWithGoogle
    }


  return (
    <div>
      <authContext.Provider value = {functions}>
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
      </authContext.Provider >

    </div>
  )
}

export default App