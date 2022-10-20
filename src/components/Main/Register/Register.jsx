import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../../../context/authContext';
import { Link, useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from '../../../firebase/firebaseConfig'
import { Alert } from '../../../firebase/Alert/Alert';
import { useForm } from 'react-hook-form';
import {useDebounce} from 'use-debounce'
import './Register.css';
import R from '../../../assets/img/R-logo-final.png';

const db = getFirestore(app);


const Register = () => {
  const {userName, setUserName} = useContext(authContext)
  // const {userLname, setUserLname} = useContext(authContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [userLname, setUserLname]= useState('')
  const [userMail, setUserMail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const navigate = useNavigate()
  
  // const [debouncedName] = useDebounce(nameRegister, 2000);
  // const [debouncedLname] = useDebounce(lNameRegister, 2000);
  const [error, setError] = useState()
  const { signup } = useContext(authContext)


  const dbRef = collection(db, "users");

  const data = {
    name: userName,
    lastName: userLname , 
    mail: userMail,
    password: password    
  };

// useEffect(() => {

// }, [debouncedName, debouncedLname])

  const addUser = (e) => {
    e.preventDefault()
  addDoc(dbRef, data)
  .then(docRef => {
    console.log("Document has been added successfully");
    console.log('esto es data registrada', data.name)
    navigate('/')
  })
  }



  // const getName = (event) => {
  //   event.preventDefault()
  //   setUserName(event.target.value)


  // };

  const getLname = (event) => {
    event.preventDefault()
    setUserLname(event.target.value)

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

  const sendContext = (data) =>{
    console.log("Esto es data",data) //recibe valores de los input del form como obj
    setUserName(data)
    console.log(setUserName)
  }


  return (
    <div className='registerContainer'>

      {error && <Alert message={error} />}
      <section className='logoContainer'>
        <img className="logo" src={R} alt="reduce.logo" />
        <p className='welcome'>¡Bienvenido!</p>
      </section>
      <form className="formRegister" onSubmit={handleSubmit( data=> sendContext(data))}>
        <input className='regInputs' 
          type="name"
          name='name'
          placeholder='Nombre'
       
          {...register("name")} 
        />
        <input className="regInputs" onChange={getLname}
          type="apellido"
          name='apellido'
          placeholder='Apellidos'
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
          <input type="checkbox" /><span className="checkbox">Acepto los términos y condiciones</span>
        </section>
        <button className="registerButton" onClick={addUser}>Regístrate</button>
      </form>
      <span className='linkToRegister'>¿Eres <span className='text-greenSearch'>Reducer</span>?<Link to='/login'>  Iniciar Sesión</Link></span>
    </div>
  )
}

export default Register