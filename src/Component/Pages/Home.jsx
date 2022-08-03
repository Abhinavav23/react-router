import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  const[posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setPosts(data)
    })
  }, [])
  return (
    <>
    <h2>Home Page</h2>
    <ul>
    {
      posts.map((el) =>{
        return (
          <li key={el.id}>
            <Link to={`${el.id}/${el.userId}`}>{el.title}</Link>
            {/* <div>{el.title}</div> */}
            <br/>
          </li>
        )
      })
    }
    </ul>
    </>
  )
}
