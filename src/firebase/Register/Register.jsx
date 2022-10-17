import React, { useContext, useState } from 'react'
import { authContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { Alert } from '../Alert/Alert';
import './Register.css';
import R from '../../assets/img/R-logo-final.png';

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
    <div className='registerContainer'>

      {error && <Alert message={error} />}
        <section className='logoContainer'>
          <img className="logo" src={R} alt="reduce.logo" />
          <p className='welcome'>Bienvenido!</p>
        </section>
      <form className="formRegister"onSubmit={handleSubmit}>
   
        <input className='regInputs' onChange={handleChange}
          type="name"
          name='name'
          placeholder='Nombre'
        />

        <input className="regInputs" onChange={handleChange}
          type="apellido"
          name='apellido'
          placeholder='Apellidos'
        />

    
        <input className="regInputs" onChange={handleChange}
          type="email"
          name='email'
          placeholder='Email'
        />

       
        <input className="regInputs" onChange={handleChange}
          type="password"
          name='password'
          placeholder='Contraseña'
          id='password' />


        <input className="regInputs" onChange={handleChange}
          type="password"
          name='password'
          placeholder='Repetir Contraseña'
          id='password2' />
          <section className='termsConditions'>
          <input   type="checkbox" /><p className="checkbox">Acepto los términos y condiciones</p>
          </section>
        <button className="registerBtn">Regístrate</button>
      </form>

        <p>¿Olvidaste la contraseña?</p>
    </div>
  )
}

export default Register