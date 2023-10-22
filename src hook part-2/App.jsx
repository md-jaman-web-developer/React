import React, { useRef } from 'react'; // Make sure to import React at the top of your file if you're using JSX

const App = () => {

  let image =useRef();
  
  const change = ()=>{
    
    image.current.src="https://placehold.co/600x660";
    image.current.setAttribute('height','200px');
    image.current.setAttribute('width','200px');
  
  } 
  return (
    <div>
               <img ref={image}  src="https://placehold.co/600x400/000000/FFFFFF.png" alt="not found" />
                 <button onClick={change} type="submit">image change</button>
    </div>
  );
};

export default App;
