import { useState } from "react";





const App =()=>{

   let [myObj,setMyObj]=useState({
                key1:'value-1',
                key2:'value-2',
                key3:'value-3'
   })

    const change=()=>{
        // setMyObj({
        //   key1:'jaman',
        //   key2:'jonayed',
        //   key3:'jakia',


        setMyObj((prevObj)=>({

          ...prevObj,
          key1:'new vale'

        }))

        
    }

  return(
    <div>
      <h1>{myObj.key1}</h1>
         <button type="submit" onClick={change}>change</button>
    </div>
  )
}


export default App; 