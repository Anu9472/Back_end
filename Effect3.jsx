import React,{useState , useEffect} from "react";

const Effect3 = ()=>{

useEffect(async()=>{
 let res = await fetch("https://api.quotable.io/random")
 let data = res.json();
 console.log(data);
 

},[])


    return(
        <div>
       <h1>Fetch Data</h1>
        </div>
    )
}

export default Effect3