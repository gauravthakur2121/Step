import React, { useState } from 'react';
import  "./Days.css";

const Days = () => {
    const [step , setstep] = useState(1)
    const [count , setcount] = useState(0)

    const date = new Date("June 21 2027");
    date.setDate(date.getDate()+count)

  return (
    <div className='container-main'>
    <div className='container my-5'>
        <div  className='stepcontainer'>
        <button className='btnstep-' onClick={()=> setstep((c)=> c-1)}>-</button>
        <span className='step'>Step:{step}</span>
        <button className='btnsteps' onClick={()=> setstep((c)=> c+1)}>+</button>
        </div>
        <div className='container my-2 stepcontainer '>
            <button className='btnstep-' onClick={()=> setcount((c)=>c-step)}>-</button>
            <span className='step'>Count:{count}</span>
            <button className='btnstep-' onClick={()=> setcount((c)=> c+step)}>+</button>
        </div>

        <p className='paragraph'>
            <span>
                {
                    count===0 ?
                    "Today Is "
                    : count>0
                    ?`${count} days from Today is `
                    : `${Math.abs(count)} days ago was`}
                
            </span>
            <span>{date.toDateString()}</span>
        </p>


      
    </div>
    </div>
  )
}

export default Days
