import React, { useReducer } from "react";
import counterReducer from "./counterReducer";
import "./App.css"



const Child=()=>{
    
    let [value,dispatch]=useReducer(counterReducer,10);
    return(
        <div>
           <h3>current value is {value} </h3> 

           <button className="button" onClick={()=> dispatch("inc")}>Increment </button>
           <button className="button2" onClick={()=> dispatch("dec")}> Decrement</button>
        </div>
    )


}

export default Child;