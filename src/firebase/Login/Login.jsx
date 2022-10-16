import React, { useState, useContext} from 'react'
import { authContext } from '../../context/authContext';

import { useNavigate } from 'react-router-dom';
import { Alert } from '../Alert/Alert';


const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { login, loginWithGoogle }  = useContext(authContext)
  const navigate = useNavigate()
  const [error, setError] = useState()

const handleChange = ({target:{name, value}}) => {
  setUser({...user,[name]: value})
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
    if(error.code === 'auth/internal-error'){
      setError('Invalid email')
    } else if(error.code === 'auth/wrong-password'){
      setError('Your password is wrong')
    }
  }
  
}

  return (
    <div>

      {error&& <Alert message={error}/>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input onChange={handleChange}
         type="email"
          name='email'
          placeholder='youremail@company.com'
          />

        <label htmlFor="password"> Password</label>
        <input onChange={handleChange} 
        type="password" 
        name='password' 
        placeholder='******'
        id='password' />

        <button>Login</button>
      </form>
      <button onClick={handleGoogleLogin}>Google</button>
    </div>
  )
}

export default Login