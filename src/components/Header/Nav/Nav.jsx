import React, {useContext,useEffect,useState} from 'react'
import { authContext } from '../../../context/authContext';
import { Navigate, useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  const navigate = useNavigate()
  const {logout, logOutUser} = useContext(authContext)
  const {userName,setUserName}= useContext(authContext)
  const {userGoogle,setUserGoogle}= useContext(authContext)
  const [showSidebar, setShowSidebar] = useState(false)
  const toggleBar = () =>{
    showSidebar
      ? setShowSidebar(false)
      : setShowSidebar(true)
  }

useEffect(() => {
  if (userGoogle != null) {
    navigate('/')
  }
}, [userGoogle])

  const handleLogout = async () => {
    try {
        logOutUser()
        console.log('usuario desconectado')
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
          width='45'
          height='45'
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
        <span><Link onClick={toggleBar} to ="/profile" className='linkmvl'>Perfil</Link></span>
        </div>
        
      </div>
    </div>
   
  </>
  )
}
export default Nav