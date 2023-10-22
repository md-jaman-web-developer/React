import React, { useRef } from 'react'; // Make sure to import React at the top of your file if you're using JSX

const App = () => {

  // let first =useRef();
  // let last =useRef();
  let first,last=useRef();
  const change = ()=>{
    
    let firstName=first.value;
    let lastName=last.value;

    alert(firstName+""+ lastName);
  } 
  return (
    <div>

     <input type="text"  ref={(a)=>first=a}name=""id=""placeholder='First name' />
     <input type="text" ref={(a)=>last=a} name="" id=""placeholder='last name' />
                 <button onClick={change} type="submit">image change</button>
    </div>
  );
};

export default App;
