import React from 'react'
import Consumer from './consumerContext'

export const userContext=React.createContext()


const Usecontext=()=>{
    
    return(

        <>
        <userContext.Provider value={"Sayan Samanta"}>
            <Consumer/>
        </userContext.Provider>
        </>
    )
}

export default Usecontext