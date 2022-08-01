import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <>
    <header className='header'>
        <ul>
            <li>
                {/* <a href="/">Home</a> */}
                {/* <Link to='/'>Home</Link> */}
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                {/* <a href="/about">About</a> */}
                {/* <Link to='/about'>About</Link> */}
                <NavLink to='/about'>About</NavLink>
            </li>
            <li>
                {/* <a href="/profile">Profile</a> */}
                {/* <Link to='/profile'>profile</Link> */}
                <NavLink to='/profile'>profile</NavLink>
            </li>
            <li>
                {/* <a href="/profile">Profile</a> */}
                {/* <Link to='/cart'>cart</Link> */}
                <NavLink to='/cart'>cart</NavLink>
            </li>
        </ul>
    </header>
    </>
  )
}
