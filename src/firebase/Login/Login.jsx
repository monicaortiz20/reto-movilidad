// import { useEffect } from 'react';
import React from 'react'
import './Login.css'
import Footer from '../../components/Footer/Footer'
// import { googleAuthProvider, signInWithPopup, onAuthStateChanged } from 'react-firebase/auth'
// import { auth, userExists } from '../firebaseConfig'


const Login = () => {

  // const [currentUser, setCurrentUser] = useState(null)
  // //0 - inicializado  1 - loading  2- login completo  
  // //3 -login pero sin registro  4- no hay nadie logueado
  // const [state, setCurrentstate] = useState(0)
  
  // useEffect(()=> {
  //   setCurrentstate(1)
  //   onAuthStateChanged(auth, handleUserStateChanged);

  // }, [])

  // async function handleUserStateChanged(user){
  //   if(user){
  //     const isRegistered = await userExists(user.id)
  //     if(isRegistered){

  //       //rediriguir a dashboard
  //       setCurrentstate(2)
  //     }else {
  //       setCurrentstate(3)
  //     }
  //   }else{
  //     setCurrentstate(4)
  //     console.log('None authenticated.')
  //   }
  // }

  //   async function handleOnClick() {
  //     const googleProvider = new googleAuthProvider();
  //     await signInWithGoogle(googleProvider);

  //     async function signInWithGoogle(googleAuthProvider) {
  //       try {
  //         const res = await signInWithPopup(auth, googleProvider);
  //         console.log('esto es res', res)
  
  //       } catch(error) {
  //         console.log(error)
  //       }
  //     }
  
  //   }


  // if(state ===2){
  //   return <div>You are authenticated and registered.</div>
  // }

  // if(state ===4){
  //   return (<div>
  //     <div>Login</div>
  //     <button onClick={handleOnClick}>Login with Google</button>
  //   </div>)
  // }

  return (<>
    <div className='logo'>LOGO</div>
    <div className='loginDiv'>
      <div className='formDiv'>
        <div className="form">
          <input className="email" type="Email" placeholder="Email" />
          <input className="password" type="Password" placeholder="Password" />
        </div>
          <span className="linkRegister"> Crear cuenta nueva</span>
        <button type="submit" className="loginBtn"> Log in</button>
        <span className="or">o continúa con </span>

        <div className="googleBtn">
          <button type="submit"
          //  className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500"
          >
            <svg className="googleLogo" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z" /><path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z" /><path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z" /><path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z" /></svg>

          </button>
        </div>
      </div>
    </div>
	</>
  )
}

export default Login

{/* <span className="h-px w-16 bg-gray-100"></span> */}