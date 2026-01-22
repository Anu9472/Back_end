import React , {Component, useEffect} from "react";

const Effect1 = ()=>{

useEffect(()=>{

    console.log("Component render");
    console.log("Hello");
    
    
},[])


    return( 
        <div>
        <h1>Hello,React</h1>
        </div>
    )
}

export default Effect1