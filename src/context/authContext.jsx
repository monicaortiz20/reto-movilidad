import { createContext, useContext, useEffect, useState } from "react";
import { signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase/firebaseConfig'

export const authContext = createContext()

//esta func es como un hook personalizado, no hace falta llamar al context más, solo exporto authContext
 export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) throw new Error('There is no auth provider')
    return context
}
export function AuthProvider ({children}) {
    const [user, setUser] = useState('')


    const signup = (email, password) => 
    createUserWithEmailAndPassword(auth, email, password);

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        signOut(auth)
    }

    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth, (currentUser)  => {
            setUser(currentUser)
            // setLoading(false)
        })
        return () => unsubscribe();
    },[])


    return (
        <authContext.Provider value = {{signup, login, user, logout}}> 
            {children}
        </authContext.Provider>
    )
}