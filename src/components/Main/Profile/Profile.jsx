import React, {useContext} from 'react'
import { authContext } from '../../../context/authContext';
import profilePic from '../../../assets/vectors/User.png'
import accountImg from '../../../assets/vectors/profile.png'
import activity from '../../../assets/vectors/activity.png'
import invite from '../../../assets/vectors/userImg.png'
import token from '../../../assets/vectors/tokens.png'
import news from '../../../assets/vectors/bell.png'
import help from '../../../assets/vectors/help.png'
import './Profile.css'



const Profile = () => {

  const {userName,setUserName} = useContext(authContext)
  const {userLname,setUserLname} = useContext(authContext)
  const {userGoogle,setUserGoogle}= useContext(authContext)


  return (
      <div className='profileContainer'>
        <section className='userInfo'>
        <img src={profilePic} alt="user pic" className='userImg'/>
        <h1 className='userName'>{userName}{userLname}{userGoogle}</h1>
        </section>
        <section className='buttonsContainer'>
         
          <button className='profileBtns'>
          <img src={accountImg} alt="user-icon" />
          <p>Mi cuenta</p></button>
         
          <button className='profileBtns'>
          <img src={activity} alt="user-activity" />
          <p>Mi actividad</p> </button>
         
          <button className='profileBtns'>
          <img src={invite} alt="user-friends" /> 
          <p>Invitar amigos</p></button>
         
          <button className='profileBtns'>
          <img src={token} alt="token" /> 
          <p>Mis Tokens</p></button>
         
          <button className='profileBtns'>
          <img src={news} alt="news" /> 
          <p>Noticias relacionadas </p></button>
         
          <button className='profileBtns'>
          <img src={help} alt="help" /> 
          <p>Ayuda</p></button>
        </section>
    </div>
  )
}

export default Profile