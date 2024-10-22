import React, { useState,useMemo } from 'react'

const Memo = () => {
    const [count,setCount]=useState(0)
    const [input,setInput]=useState('')

    const expensivecalculation=(num)=>{
        console.log("Calculating...")
        let result=0;
        for(let i=0;i<1000000000;i++){
            result+=num
        }
        return result
    }

    const memoizedValue=useMemo(()=>{
        return expensivecalculation(count)
    },[count])
  
    return (
    <div>
        <h1>Count:{count}</h1>
        <h2>Expensive Calculation Result: {memoizedValue}</h2>
        <input
            type='text'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder='Type something'
        />
        <button onClick={()=>setCount(count+1)}>Increment Count</button>
    </div>
  )
}

export default Memo