import { useEffect, useState } from 'react';
// import { googleAuthProvider, signInWithPopup, onAuthStateChanged } from 'react-firebase/auth'
// import { auth, userExists } from '../firebaseConfig'


// const Login = () => {

//   const [currentUser, setCurrentUser] = useState(null)
//   //0 - inicializado  1 - loading  2- login completo  
//   //3 -login pero sin registro  4- no hay nadie logueado
//   const [state, setCurrentstate] = useState(0)
  
//   useEffect(()=> {
//     setCurrentstate(1)
//     onAuthStateChanged(auth, handleUserStateChanged);

//   }, [])

//   async function handleUserStateChanged(user){
//     if(user){
//       const isRegistered = await userExists(user.id)
//       if(isRegistered){

//         //rediriguir a dashboard
//         setCurrentstate(2)
//       }else {
//         setCurrentstate(3)
//       }
//     }else{
//       setCurrentstate(4)
//       console.log('None authenticated.')
//     }
//   } 

//     async function handleOnClick() {
//       const googleProvider = new googleAuthProvider();
//       await signInWithGoogle(googleProvider);

//       async function signInWithGoogle(googleAuthProvider) {
//         try {
//           const res = await signInWithPopup(auth, googleProvider);
//           console.log('esto es res', res)
  
//         } catch(error) {
//           console.log(error)
//         }
//       }
  
//     }


//   if(state ===2){
//     return <div>You are authenticated and registered.</div>
//   }

//   if(state ===4){
//     return (<div>
//       <div>Login</div>
//       <button onClick={handleOnClick}>Login with Google</button>
//     </div>)
//   }

//   return <div>Loading...</div>
  
// }

// export default Login


import React from 'react'

const Login = () => {
  // const [user, setUser] = useState({
  //   email:'',
  //   password: ''
  // })

  return (
    <div>
      <form>
        <input type="email" name='email' id='email' />
        <input type="password" name='password' id='password' />
      </form>
    </div>
  )
}

export default Login