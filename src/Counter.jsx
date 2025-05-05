import React, { useRef } from "react";
import { useState } from "react";
import { data } from "react-router-dom";

function Counter(){
    const [count,setCount]=useState(0)
    
    const refCount=useRef(0)
    function increment(){
        refCount.current+=1
        console.log(refCount)

        // setCount(preCount=>preCount+1)
        // setCount(preCount=>preCount+1)
    }
    
    return(
        <>
            <h1>{data}</h1>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={()=>{setCount(refCount.current)}}>update</button>

        </>
    )
}
export default Counter