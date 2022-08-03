import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Profile = () => {
  return (
    <>
    <h2>Profile Page</h2>
    <div>Name</div>
    <div>image</div>
    
    <div>email</div>

    <Link to='mywallet'>my wallet</Link>
    <Link to='myaddress'>my Address</Link>
    <Link to='myorder'>my Orders</Link>
    <br/>
    <br/>
    <Outlet/>
    </>
  )
}
