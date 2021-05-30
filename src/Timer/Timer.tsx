import React, { useState, useEffect } from 'react'
import TimerBtn from '../TimerBtn/TimerBtn'
import "./Timer.css"


const Timer = () => {
    const [sec, setsec] = useState<number>(0)
    const [min, setmin] = useState<number>(0)
    const [isActive, setisActive] = useState<boolean>(false)

    function togleTimer() {
        setisActive(!isActive)
    }

    function resetTimer() {
        setisActive(false)
        setmin(0)
        setsec(0)
    }
    // console.log(isActive)

    useEffect(() => {
        let interval: any = null
        if (isActive) {
            interval = setInterval(() => {
                setsec((sec) => sec + 1)
                if (sec === 19) {
                    setmin((min) => min + 1)
                    setsec(0)
                }
            }, 500);
        }
        else if (!isActive) {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    })


    return (
        <div className="timer">
            <h1>{min < 10 ? `0${min}` : min} : {sec < 10 ? `0${sec}` : sec}</h1>
            { /*<button onClick={togleTimer}>Start</button>
            <button onClick={resetTimer}>Reset</button>
    */ }
            <div style={{marginBottom:"20px"}}>
                <TimerBtn  fcn={togleTimer} State={isActive} value="Start" notVal="Pause" cl="warning"/>
                <TimerBtn fcn={resetTimer} State={false} value="Reset" notVal="Reset" cl="danger" />
            </div>
        </div>
    )
}

export default Timer