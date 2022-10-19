import React, {useState, useEffect,useContext} from 'react'
import {BrowserRouter} from 'react-router-dom';
import { authContext } from '../src/context/authContext';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../src/firebase/firebaseConfig'

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => {
  const [userName, setUserName] = useState()
  const [userLname,setUserLname]= useState('')
  const [userGoogle, setUserGoogle] = useState('')

<<<<<<< HEAD
  const signup = (email, password) => { 
  createUserWithEmailAndPassword(auth, email, password);
  // setUserName()
  // setUserLname()
  }
=======


>>>>>>> e09bf28e7dcbd3a7a056f9e8c565590e44adf1b8

  const login = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('userCredential:', userCredential)
        const user = userCredential.user;
        setUserName(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  const logout = () => {
      signOut(auth)
  }

  const logOutUser = () => {
    signOut(auth).then(() => {
      console.log('el usuario se ha desconectado')
    }).catch((error) => {
    });
}

  const loginWithGoogle = () => {
      const googleProvider = new GoogleAuthProvider()
         return signInWithPopup(auth,googleProvider)
  }
         
  //para saber qué user está autenticado
  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (currentUser)  => {
         setUserGoogle(currentUser)
         console.log('soy display name ', currentUser)
     })
     return () => unsubscribe();
 },[])

  const functions = {
    login,
    userName,
    setUserName,
    userLname,
    userGoogle,
    logout,
    logOutUser,
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