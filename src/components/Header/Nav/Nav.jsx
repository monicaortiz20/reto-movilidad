import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return ( 
    <div>
        <Link to ="/" className='Home'>Home</Link>
        <Link to ="/profile" className='Profile'>Profile</Link>
        <Link to ="/login" className='Login'>Login</Link>
        <Link to ="/register" className='Register'>Register</Link>
    </div>
)
}
export default Nav