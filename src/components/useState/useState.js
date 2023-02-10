import React,{useState} from 'react'
import "./useState.css"
const Usestate=()=>{
    const initialCount=0
    const [count,setCount]=useState(initialCount);
    
    return (
        <>
        <h1>Count:{count}</h1>
        <h2>Click here to increment the count value by one</h2>
        <button onClick={()=>setCount(count+1)}>Button 1</button>
        <h2>Click here to increment the count value by five</h2>
        <button onClick={()=>setCount(count+5)}>Button 2</button>
        <h2>Click here to decrement the count value by one</h2>
        <button onClick={()=>setCount(count-1)}>Button 3</button>
        <h2>Click here to decrement the count value by five</h2>
        <button onClick={()=>setCount(count-5)}>Button 4</button>
        <h2>Click here to Reset the count value</h2>
        <button onClick={()=>setCount(initialCount)}>Button 5</button>
        </>
        
    )
}

export default Usestate