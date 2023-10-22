import React, { useRef } from 'react';

const App = () => {
 
  let initialValue = 0; // Set your initial value here
  let number = useRef(initialValue);
        
  const change = () => {
  number.current++;
  console.log(number.current);

  };

  return (
    <div>
      
      <button type="submit" onClick={change}>Click</button>
    </div>
  );
};

export default App;
