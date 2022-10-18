import React, {useState, useEffect} from 'react'
import {BrowserRouter} from 'react-router-dom';
import { authContext } from '../src/context/authContext';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../src/firebase/firebaseConfig'

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => {

    const [userGoogle, setUserGoogle] = useState('')


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

    //para saber qué user está autenticado
    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth, (currentUser)  => {
            setUserGoogle(currentUser.displayName)
            console.log('user auth google', currentUser, currentUser.displayName)
        })
        return () => unsubscribe();
    },[])

    const functions = {
      signup,
      login,
      userGoogle,
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