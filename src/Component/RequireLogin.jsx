import React, { useContext } from 'react'
import { useNavigate, Navigate} from 'react-router-dom';
import { UserContext } from '../AuthContext';

export const RequireLogin = ({children}) => {
const loggedInUser = useContext(UserContext)
  if(!loggedInUser.user.username){
    return <Navigate to='/login'/>
  } else{
    return children
  }
}
