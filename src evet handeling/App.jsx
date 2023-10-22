import React from 'react'; // Make sure to import React at the top of your file if you're using JSX

const App = () => {

  const postfromdata=(event)=>{
       event.preventDefault();
       alert('from submitted');
  }
  return (
    <div>
      <form action="" onSubmit={postfromdata}>
        <input type="text" value=""  placeholder='my name'/>
         <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default App;
