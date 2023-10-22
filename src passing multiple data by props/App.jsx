import Hero from "./component/hero";


const App = () => {
 

  const ItemObj = {
    name:'jaman',
    city:'dhaka',
    age:44
  }
 return(
   <div>
        <Hero item={ItemObj} />        
  </div>   
   
 )

};

export default App;