import { useState } from "react";
import "./App.css"
import "./Counter.css"
function Counter() {
   let [Counter,SetCounter]= useState(0);
    return (
        <>
           <h1>React Counter App</h1>
            <div className="container">
                <button className="btn btn-danger" disabled={Counter===0} onClick={()=>{
                    if(Counter>0){
                        SetCounter(Counter-1);
                       
                    }

                }}>-</button>
                <p>{Counter}</p>
                <button className="btn btn-success" disabled={Counter===10} onClick={()=>{
                    if(Counter<10){
                        SetCounter(Counter+1);
                      
                    }

                }}>+</button>
            </div>

        </>
    )
}
export default Counter;