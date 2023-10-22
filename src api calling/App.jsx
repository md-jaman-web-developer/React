import React, { useRef } from 'react';

const App = () => {
 
  const apidata = useRef(null);

const fetchdta =async()=>{
 const response= fetch('https://jsonplaceholder.typicode.com/todos/1')

       apidata.current=await response.json();
} ;       
  const showdata = () => {

          myTags.current.innertext =JSON.stringify(apidata.current);
  };

  return (
    <div>
          <p ref={myTag}></p>
              <button type="submit" onClick={fetchdta}>Call API</button>      
              <button type="submit" onClick={showdata}>Show Data</button>      
    </div>
  );
};

export default App;
