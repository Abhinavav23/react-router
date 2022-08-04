import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'

export const Home = () => {
  const[posts, setPosts] = useState([])
  const [searchParams, setsearchParams] = useSearchParams()
  const location = useLocation()
   let userId = searchParams.get("userId");
   let user = searchParams.get("user");
   console.log(user);
  const filteredData = posts.filter((el) => {
    return el.userId === userId
  })

  const navigate = useNavigate()
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
    <button onClick={() => setsearchParams({userId: 1, user:'Abhinav'})} className='filterButton'>userId 1</button>
    <button onClick={() => setsearchParams({userId: 2})} className='filterButton'>userId 2</button>
    <button>Post having more than 50 characters</button>
    <ul>
    {
      posts.map((el) =>{
        return (
          <li key={el.id}>
            {/* <Link to={`${el.id}/${el.userId}`}>{el.title}</Link> */}
            <div>userId: {el.userId}</div>
            <button onClick={() =>navigate(`${el.id}`)}>{el.title}</button>
            {/* <div>{el.title}</div> */}
            <br/>
            <br/>
          </li>
        )
      })
    }
    </ul>
    </>
  )
}



// const userRef = useRef();

// // userRef.current.value

// <input type="test" id ="username" ref={userRef}/>

// document.getElementById('username')

// // userRef doesnt rerender your comp when you change the value