import React from 'react'; // Make sure to import React at the top of your file if you're using JSX

const App = () => {

  function handleButtonClick() {
    alert('clickila');
  }
  return (
    <div>
      <button type="submit" onClick={() => alert('click')}>
        submit
      </button>
      <button type="submit" onClick={handleButtonClick}>
        submit
      </button>
    </div>
  );
};

export default App;
