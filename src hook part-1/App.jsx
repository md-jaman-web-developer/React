import React, { useRef } from 'react'; // Make sure to import React at the top of your file if you're using JSX

const App = () => {

  let MyHeadeling =useRef();
  
  const change = ()=>{
    // MyHeadeling.current.innerText='hello jaman';
    // MyHeadeling.current.innerHTML="<ol><li>A</li><li>B</li></ol>";
    MyHeadeling.innerHTML="<ol><li>A</li><li>B</li></ol>";

  }
  return (
    <div>
      {/* <h1 ref={MyHeadeling}></h1> */}
      <h1 ref={(h1)=>MyHeadeling=h1}></h1>

      <button type="submit" onClick={change}>submit</button>
    </div>
  );
};

export default App;
