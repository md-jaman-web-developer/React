import React, { useRef } from 'react';

const App = () => {
  let myheadline = useRef();

  const change = () => {
    myheadline.current.classList.remove('text-success');
    myheadline.current.classList.add('text-danger');
  };

  return (
    <div>
      <h1 className="text-success" ref={myheadline}>
        this is head line
      </h1>
      <button type="submit" onClick={change}>Click</button>
    </div>
  );
};

export default App;
