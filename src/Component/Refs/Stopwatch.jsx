import React, { useEffect, useRef, useState } from 'react'

export const Stopwatch = () => {
    const [time, setTime] = useState(0)
    // const [intervalId, setId] = useState(0);

    // let id; // undefined
    const id = useRef()

    useEffect(() => {
        return () => {
            clearInterval(id.current)
            console.log('aaaaa');
            console.log(id.current);
        }
    }, [])

    const startTimer = () => {
        id.current = setInterval(() => {
            setTime((prevtime) => prevtime+1); //state update ---> rerender
        }, 1000)
        console.log(id.current);
        // setId(id)
    }

    const stopTimer = () => {
    //    clearInterval(intervalId)
    console.log(id.current);
        clearInterval(id.current)
    }

  return (
    <>
    <h2>Stopwatch</h2>
    <h3>Timer: {time}</h3>
    <button onClick={startTimer}>Start</button>
    <button onClick={stopTimer}>Stop</button>
    </>
  )
}
