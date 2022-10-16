import React from 'react'
import { useAuth } from '../../../context/authContext'
import {Link} from 'react-router-dom'

const Nav = () => {

  const {user, logout} = useAuth()

  return (
    <div>
        <Link to ="/" className='Home'>Home</Link>
        <Link to ="/login" className='Login'>Login</Link>
        <Link to ="/register" className='Register'>Register</Link>
        
        <Link to ="/profile" className='Profile'>{{user}? {style:{ display:'block'}} : {style:{display:'none'}}}Profile</Link>

    </div>
  )
}
export default Nav