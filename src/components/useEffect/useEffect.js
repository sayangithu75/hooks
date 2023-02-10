import React,{useState,useEffect} from 'react'

const Useffect=()=>{

    const[count,setCount]=useState(0);
    const[second,setSecond]=useState(0);
    useEffect(()=>{
        console.log("Updating document title");
        document.title=`you clicked ${count} times`
    },[count])
    useEffect(()=>{
        const interval=setInterval(()=>{
            setSecond(second+1)
        },1000)
        return ()=>clearInterval(interval)
    },[second])
    return(
        <>

        <button onClick={()=> setCount(count+1)}>Click me to render the screen</button>
        <h2>{second}</h2>
        </>
    )
}

export default Useffect