import React , {useContext} from "react" 

import {userContext} from "./providerContext"

const Usercontext=()=>{
    const name=useContext(userContext)
    return(
        <>
        <h1>Hi I am {name}</h1>
        </>
    )
}

export default Usercontext