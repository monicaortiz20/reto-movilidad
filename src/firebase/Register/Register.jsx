import React, { useContext, useState } from 'react'
import { authContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from '../firebaseConfig'
import { Alert } from '../Alert/Alert';
import './Register.css';
import R from '../../assets/img/R-logo-final.png';

const db = getFirestore(app);


const Register = () => {
  const [userName, setUserName] = useState('')
  const [userLname, setUserLname] = useState('')
  const [userMail, setUserMail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const navigate = useNavigate()
  
  const [error, setError] = useState()
  const { signup } = useContext(authContext)


  const dbRef = collection(db, "users");

  const data = {
    name: userName,
    lastName: userLname, 
    mail: userMail,
    password: password    
  };

  const addUser = (e) => {
    e.preventDefault()
  addDoc(dbRef, data)
    .then(docRef => {
      console.log("Document has been added successfully");
      console.log('esto es data registrada', data)
      navigate('/')
    })
    .catch(error => {
      console.log(error);
    })
  }



  const getName = (event) => {
    event.preventDefault()
    setUserName(event.target.value);
  };

  const getLname = (event) => {
    event.preventDefault()
    setUserLname(event.target.value);
  };

  const getUserMail = (event) => {
    event.preventDefault()
    setUserMail(event.target.value);;
  };

  const getPassword = (event) => {
    event.preventDefault()
    setPassword(event.target.value);
  };

  const getPassword2 = (event) => {
    event.preventDefault()
    setPassword2(event.target.value);
  };



  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   setError('')
  //   try {
  //     await signup(user.email, user.password)
  //     navigate('/')

  //   } catch (error) {
  //     console.log(error.code)
  //     if (error.code === 'auth/internal-error') {
  //       setError('Invalid email')
  //     } else if (error.code === 'auth/weak-password') {
  //       setError('Your password must have a minimum of 6 characters')
  //     }
  //   }

  // }

  return (
    <div className='registerContainer'>

      {error && <Alert message={error} />}
        <section className='logoContainer'>
          <img className="logo" src={R} alt="reduce.logo" />
          <p className='welcome'>Bienvenido!</p>
        </section>
      <form className="formRegister"onSubmit={addUser}>
   
        <input className='regInputs' onChange={getName}
          type="name"
          name='name'
          placeholder='Nombre'
          value={userName}
           />

        <input className="regInputs" onChange={getLname}
          type="apellido"
          name='apellido'
          placeholder='Apellidos'
          value={userLname}
        />

    
        <input className="regInputs" onChange={getUserMail}
          type="email"
          name='email'
          placeholder='Email'
          value={userMail}
        />

       
        <input className="regInputs" onChange={getPassword}
          type="password"
          name='password'
          placeholder='Contraseña'
          id='password'
          value={password}
           />


        <input className="regInputs" onChange={getPassword2}
          type="password"
          name='password'
          placeholder='Repetir Contraseña'
          id='password2' 
          value={password2}
          />
          <section className='termsConditions'>
          <input   type="checkbox" /><p className="checkbox">Acepto los términos y condiciones</p>
          </section>
        <button className="registerButton">Regístrate</button>
      </form>

        <p>¿Olvidaste la contraseña?</p>
    </div>
  )
}

export default Register