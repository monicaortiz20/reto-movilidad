import React, { useState} from 'react'
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { login }  = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState()

const handleChange = ({target:{name, value}}) => {
  setUser({...user,[name]: value})
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
    } else if(error.code === 'auth/weak-password'){
      setError('Your password must have a minimum of 6 characters')
    }
    // setError(error.message)
  }
  
}

  return (
    <div>

      {error&& <p>{error}</p>}
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
    </div>
  )
}

export default Login