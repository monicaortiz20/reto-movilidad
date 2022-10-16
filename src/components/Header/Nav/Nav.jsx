import React, {useContext} from 'react'
import { authContext } from '../../../context/authContext';
import { Navigate, useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'

const Nav = () => {

  const navigate = useNavigate()
  const {user, logout} = useContext(authContext)

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <div>
        <Link to ="/" className='Home'>Home</Link>
        <Link to ="/login" className='Login'>Login</Link>
        <Link to ="/register" className='Register'>Register</Link>
        {user? 
        <span><Link to ="/profile" className='Profile'>Profile</Link>¡Hola, {user}!<button onClick={handleLogout}>Log out</button></span>
        : ''}
    </div>
    </>
  )
}
export default Nav