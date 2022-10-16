import React, { useContext, useState } from 'react'
import { authContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { Alert } from '../Alert/Alert';
import './Register.css'

const Register = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { signup } = useContext(authContext)
  const navigate = useNavigate()
  const [error, setError] = useState()

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signup(user.email, user.password)
      navigate('/')

    } catch (error) {
      console.log(error.code)
      if (error.code === 'auth/internal-error') {
        setError('Invalid email')
      } else if (error.code === 'auth/weak-password') {
        setError('Your password must have a minimum of 6 characters')
      }
    }

  }

  return (
    <div>

      {error && <Alert message={error} />}
      <form className="formDiv"onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input onChange={handleChange}
          type="name"
          name='name'
          placeholder='Marina'
        />

        <label htmlFor="name">Apellido</label>
        <input onChange={handleChange}
          type="apellido"
          name='apellido'
          placeholder='García'
        />

        <label htmlFor="email">Email</label>
        <input onChange={handleChange}
          type="email"
          name='email'
          placeholder='youremail@company.com'
        />

        <label htmlFor="password"> Contaseña</label>
        <input onChange={handleChange}
          type="password"
          name='password'
          placeholder='******'
          id='password' />

        <label htmlFor="password"> Repetir contraseña</label>
        <input onChange={handleChange}
          type="password"
          name='password'
          placeholder='******'
          id='password' />

          <input type="checkbox" /><p>Acepto los términos y condiciones</p>

        <button>Regístrate</button>
      </form>

        <p>¿Olvidaste la contraseña?</p>
    </div>
  )
}

export default Register