import React from 'react'
import "./TimerBtn.css"

type props = {
    fcn : () => void,
    State : boolean,
    value : string,
    notVal : string,
    cl : string
}

const TimerBtn:React.FC <props> = ({fcn,State,value,notVal,cl}) => {
    return (
        <> 
          <button className={cl}  onClick={fcn}>{!State? `${value}` : `${notVal}`}</button>
        </>
    )
}

export default TimerBtn
