import React, { useState } from 'react'
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from './firebaseConfig'
import { useNavigate } from 'react-router-dom';

const db = getFirestore(app);


const Store = () => {

  const [userName, setUserName] = useState('')
  const [userLname, setUserLname] = useState('')
  const [userMail, setUserMail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const navigate = useNavigate()


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


  // const addValue = () => {
  //   db.collection("values")
  //     .doc(value)
  //     .set({
  //       value: value,
  //     })
  //     .then(function () {
  //       console.log("Value successfully written!");
  //     })
  //     .catch(function (error) {
  //       console.error("Error writing Value: ", error);
  //     });
  // };


  return (
    <div>
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
     name='password2'
     placeholder='Repetir Contraseña'
     id='password2' 
     value={password2}
     />
     <section className='termsConditions'>
     </section>
   <button className="registerButton">Regístrate</button>
 </form>
    </div>
  )
}

export default Store