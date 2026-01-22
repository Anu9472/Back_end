import React, { useEffect, useState } from "react";


const Effect2 = ()=>{

const [count , setCount] = useState(0)

useEffect(()=>{
console.log("count change", count);
},[count])


    return(
        <div>

            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}

export default Effect2