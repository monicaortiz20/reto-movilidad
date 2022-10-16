import React, {useContext} from 'react'
import { authContext } from '../../../context/authContext';



const Profile = () => {

  const {user} = useContext(authContext)

  return (
    <div>
      <div className='profileContainer'>
        <img src="" alt="user pic" className='user-img'/>
        <h1 className='userName'>{user.name} {user.apellido}</h1>
        </div>
        <section className='buttonsContainer'>
          <button className='btnAccount'><img src={user.image} alt="user-icon" /> Mi cuenta</button>
          <button className='btnActivity'><img src="" alt="user-activity" /> Mi actividad</button>
          <button className='btnFriends'><img src="" alt="user-friends" /> Invitar amigos</button>
          <button className='btnToken'><img src="" alt="token" /> Tokens</button>
          <button className='btnNews'><img src="" alt="news" /> Noticias relacionadas</button>
          <button className='btnHelp'><img src="" alt="help" /> Ayuda</button>
        </section>
    </div>
  )
}

export default Profile