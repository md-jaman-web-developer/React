import { Fragment } from "react"

const App=()=>  {
  
  return (
      <Fragment>
           <h1 className="h1" >hello1</h1> 
           <h1 onClick="h1" >hello1</h1>
           <button type="submit" onClick={()=>alert("hello")}>submit</button> 
          <h1>{new Date().getTime()}</h1>
          <p style={{color:"red"}}>red</p>
      </Fragment>
  )
};

export default App;
