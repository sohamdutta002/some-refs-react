import React,{useState,useCallback} from 'react'

const ChildComponent=React.memo(({onButtonClick})=>{
    console.log('ChildComponent Rendered')
    return <button onClick={onButtonClick} className='bg-red-600 p-2'>Click Me</button>
})

export const Callback = () => {
    const [count, setCount] = useState(0)
    console.log("ParentComponent Rendered")
    const handleClick=useCallback(()=>{
        setCount((prevCount)=>prevCount+1)
    },[])
    const handleClick2=()=>{
        setCount((prevCount)=>prevCount+1)
        console.log("rendered")
    }
  return (
    <div>
        <h1>Count: {count}</h1>
        <ChildComponent onButtonClick={handleClick} />
        <button onClick={()=>setCount(count+1)} className='bg-yellow-400 p-2'>Increment Count</button>
    </div>
  )
}
