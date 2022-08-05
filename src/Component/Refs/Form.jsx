import React, { useEffect, useRef } from 'react'

export const Form = () => {
    const userNameRef = useRef()
    const passwordRef = useRef()

   const submitForm = (e) => {
    e.preventDefault()
    console.log(userNameRef.current.value);
    console.log(passwordRef.current.value);
    let userInfo = {
        username: userNameRef.current.value,
        password: passwordRef.current.value
    }
   }

   useEffect(() => {
    userNameRef.current.focus()
   },[])

   
  return (
    <form onSubmit={submitForm}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" ref={userNameRef}/>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" ref={passwordRef}/>
        <button>login</button>
    </form>
  )
}
