import React, { useState } from 'react'
import './App.css';
import { Form } from './Component/Refs/Form';
import { Stopwatch } from './Component/Refs/Stopwatch';

export const AppV1 = () => {
    const [showstopWatch, setShowstopWatch] = useState(false)
  return (
    <>
    <h2 className='App'>Refs</h2>
        {/* <Form/> */}
        <button onClick={() => setShowstopWatch(!showstopWatch)}>toggleStopwatch</button>
       {showstopWatch && <Stopwatch/>}
       
    </>
  )
}
