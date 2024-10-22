import React,{useRef,useState} from 'react'

function ClickTracker(){
    const [renderCount,setRenderCount]=useState(0)
    const clickCountRef=useRef(0)
    const difRef=useRef(null)

    const handleClick=()=>{
        clickCountRef.current+=1;
    }
    const reRender=()=>{
        setRenderCount(renderCount+1)
    }
    const focusInput=()=>{
        difRef.current.focus()
    }

    return(
        <div ref={difRef}>
            <p>Click count (useRef): {clickCountRef.current}</p>
            <button className='bg-green-400 p-2' onClick={handleClick}>Click me</button>
            <button className='bg-purple-600 p-2' onClick={reRender}>Re-render</button>
            <p>Component has rendered {renderCount} times</p>
            <p>Ref value can change but will not show unless re-rendered</p>
            <button onClick={focusInput}>Focus this div</button>
        </div>
    )
}




const Ref = () => {
  return (
    <div>
        Ref
        <ClickTracker/>
    </div>
  )
}

export default Ref