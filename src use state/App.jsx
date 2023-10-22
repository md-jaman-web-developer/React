import { useState } from "react";





const App =()=>{
        let [Number,setNumber]= useState(0); 
  return(
    <div>
      <h1>Number :{Number}</h1>
      <button onClick={()=>setNumber(Number+1 )}>click</button>
    </div>
  )
}


export default App; 