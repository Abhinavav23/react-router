import React, { useContext, useEffect } from 'react'
import { Link, Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import { UserContext } from '../../../AuthContext'

export const Profile = () => {
  const loggedInUser = useContext(UserContext)
  const navigate = useNavigate();
  const logout = () => {
    loggedInUser.setUser({})
    navigate('/')
  }

  // useEffect(() => {
  //   if(!loggedInUser.user.username){
  //     navigate('/login')
  //   }
  // },[loggedInUser.user.username])

  return (
    <>
    <h2>Profile Page</h2>
    <div>Name: {loggedInUser.user.username}</div>

    {/* <Link to='mywallet'>my wallet</Link>
    <Link to='myaddress'>my Address</Link>
    <Link to='myorder'>my Orders</Link> */}
    {/* <button onClick={() => navigate('mywallet')}>my wallet</button>
    <button>my Address</button>
    <button>my Orders</button> */}
    <button onClick={() => navigate('/')}>Go to home</button>
    <br/>
    <button onClick={logout}>Logout</button>
    <br/>
    <br/>
    <Outlet/>
    </>
  )
}
