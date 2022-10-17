import React, {useContext,useState} from 'react'
import { authContext } from '../../../context/authContext';
import { Navigate, useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import './Nav.css'

const Nav = () => {

  const navigate = useNavigate()
  const {user, logout} = useContext(authContext)
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleBar = () =>{
    showSidebar 
      ? setShowSidebar(false)
      : setShowSidebar(true)
  }

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      
    } catch (error) {
      console.log(error)
    }
  }

  return (<>
    {/* phone navigation */}
    <div className="navContainer">
      {showSidebar ? (
        <button
          className='xBtn'
          onClick={toggleBar}
        >
          x
        </button>
      ) : (
        <svg
          onClick={toggleBar}
          className="burgerBtn"
          viewBox='0 0 100 80'
          width='30'
          height='30' 
        >
          <rect width='100' height='10'></rect>
          <rect y='30' width='100' height='10'></rect>
          <rect y='60' width='100' height='10'></rect>
        </svg>
      )}

      <div
        className={`sideBar
      ${showSidebar ? '-translate-x-0 ' : '-translate-x-full'}`}
      >  
       <div className='linksSideBar'>
          <Link onClick={toggleBar} to="/" className='linkmvl'>Home</Link>
        </div> 
        <div className='linksSideBar'>
          <Link onClick={toggleBar} to="/login" className='linkmvl'>Iniciar Sesión</Link>
        </div>
        <div className='linksSideBar'>
          <Link onClick={toggleBar} to ="/register" className='linkmvl'>Regístrate</Link>
        </div>
        <div className='linksSideBar'>
          {user? 
        <span><Link to ="/profile" className='linkmvl'>Profile</Link>¡Holaaa!<button onClick={(handleLogout,toggleBar)}>Log out</button></span>
        : 'no hay user'}
        </div>
      </div>
    </div>

    {/* PC navigation
    <div className='containerDesk'>
      <div className='homeDeskDiv'>
        <Link  to="/" className='linkToHome'>
          Reduce <span className='appTextDesk'>App</span>
        </Link>
      </div>
      <div className='rightDivLinks'>
        <Link  to="/login" className='flex items-center gap-2 group'>
          <span>Iniciar Sesión</span>
        </Link>
        <Link  to="/register" className='flex items-center gap-2 group'>
          <span>Regístrate</span>
        </Link>
        {user? 
        <span><Link to ="/profile" className='flex items-center gap-2 group'>Perfil</Link>¡Hola, {user}!<button onClick={handleLogout,toggleBar}>Log out</button></span>
        : ''}
      </div>
    </div> */}
  </>
  )
}
export default Nav


/* <>
<div>
    <Link to ="/" className='Home'>Home</Link>

    <Link to ="/login" className='Login'>Login</Link>
    <Link to ="/register" className='Register'>Register</Link>
    {user? 
    <span><Link to ="/profile" className='Profile'>Profile</Link>¡Hola, {user}!<button onClick={handleLogout}>Log out</button></span>
    : ''}

</div>
</> */