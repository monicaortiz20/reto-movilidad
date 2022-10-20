import React, {useContext} from 'react'
import { Navigate } from 'react-router-dom'
import { authContext } from '../../context/authContext';

const ProtectedRoute = ({children}) => {
    // const { userName, userGoogle } = useContext(authContext)

    // if (!userName || !userGoogle ) {
    //     return (<Navigate to='/' />);
    // }


  return children
}

export default ProtectedRoute