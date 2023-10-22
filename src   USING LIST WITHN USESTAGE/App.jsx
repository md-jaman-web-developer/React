import { useState } from "react";




const App =()=>{

   let [list,setliust]=useState([])
  let [item,setItem]=useState()
        
    const AddToList =()=>{
      list.push(item)
      setliust([...list])
    }
       

      const RemoveItem =(index)=>{
             list.splice(index,1)

             setliust([...list])
      }

  return(
    <div>


                <table>
                    <tbody>
                         {
                            list.length!==0?(
                                 list.map((element,index)=>{
                                  return(
                                    <tr>
                                      <td>{element}</td>
                                      <td><butto onClick={()=>RemoveItem(index)}>remove</butto></td>
                                    </tr>
                                  )

                                 })
                            ):(<tr></tr>)
                         }
                    </tbody>
                </table>
         <input onChange={(e)=>setItem(e.target.value)} type="email" name="" id=""  placeholder="Item"/>
         <button onClick={AddToList} type="submit">Add</button>
    </div>
  )
};


export default App; 