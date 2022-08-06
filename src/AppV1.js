import React, { useRef, useState } from 'react'
import './App.css';
import { Address } from './Component/Refs/Address';
import { Form } from './Component/Refs/Form';
import { Stopwatch } from './Component/Refs/Stopwatch';

export const AppV1 = () => {
    const [showstopWatch, setShowstopWatch] = useState(false)
    const addressRef = useRef()
    const focusInput = () =>{
        addressRef.current.focus()
    }
  return (
    <>
    <h2 className='App'>Refs</h2>
        <button onClick={focusInput}>change pin</button>
        <Address key={1} ref={addressRef} city="Patna" pin="800010"/>
        {/* <button onClick={() => setShowstopWatch(!showstopWatch)}>toggleStopwatch</button> */}
       {/* {showstopWatch && <Stopwatch/>} */}
    </>
  )
}
