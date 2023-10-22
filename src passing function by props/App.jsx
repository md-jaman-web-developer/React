import Hero from "./component/hero";


const App = () => {
 

  const click=()=>{
    alert("say hello ! ");
  }
 return(
   <div>
        <Hero item={click} />        
  </div>   
   
 )

};

export default App;