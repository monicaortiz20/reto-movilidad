import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return ( 
    <div>
        <Link to ="/" className='Home'>Home</Link>
        <Link to ="/profile" className='Profile'>Profile</Link>
    </div>
)
}
export default Nav