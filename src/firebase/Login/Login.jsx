
import React, { useState, useContext, useEffect } from 'react'
import { authContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { Alert } from '../Alert/Alert';
import './Login.css'
import logoR from '../../assets/img/logo-final.png'
import { onAuthStateChanged } from 'firebase/auth';
import { userExists } from '../firebaseConfig';


const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });


  const { login, loginWithGoogle } = useContext(authContext)
  const navigate = useNavigate()
  const [error, setError] = useState()

//-------------------------------------
  //llamos a useEffect para ejecutar código cada vez que se actualiza/renderiza el componente
  //o se actualiza algún estado
  //para detectar si el usuario está logueado o no, es decir, si esta autenticado

  useEffect(() => {
    onAuthStateChanged(auth, handleUserStateChanged);
  }, []);

  async function handleUserStateChanged(user){
    if(user){
      const isRegistered = await userExists(user.uid)
      if(isRegistered){
        console.log(user.displayName)
        navigate('/')
      }
    } else {
      console.log('No hay nadie autenticado')
    }
  }
//-------------------------------------

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle()
      navigate('/')

    } catch (error) {
      setError(error.message)
    }
  } 

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login(user.email, user.password)
      navigate('/')

    } catch (error) {
      console.log(error.code)
      if (error.code === 'auth/internal-error') {
        setError('Invalid email')
      } else if (error.code === 'auth/wrong-password') {
        setError('Your password is wrong')
      }
    }
  }

    return (
      <>
        <div className='loginDiv' onSubmit={handleSubmit}>
        <div className='logoCont'>
          <img className='logoR' src={logoR} alt="reduce.logo" />
        </div>
          <div className='formDiv'>
            {/* <div className="form"> */}
              <input onChange={handleChange} className="email" type="Email" placeholder="Email" />
              <input onChange={handleChange} className="password" type="Password" placeholder="Password" />
            {/* </div> */}

            <span className="linkRegister"> Crear cuenta nueva</span>
            <button type="submit" className="loginBtn"> Log in</button>
            <span className="or">o continúa con </span>

            <div className="googleBtn">
              <button onClick={handleGoogleLogin} type="submit">
                <svg className="googleLogo" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z" /><path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z" /><path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z" /><path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z" /></svg>
              </button>
            </div>
            <p className='forgot'>¿Olvidaste la contraseña?</p>
          </div>
        </div>
      </>
    )
}

export default Login
