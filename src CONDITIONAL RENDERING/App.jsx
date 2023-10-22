const loginjStatus = (status)=>{
  if (status) {
    return <button type="submit">log out</button>
  } else {
    return <button type="submit">log in </button>
  }
}

const App = () => {
return  (
  <div>
    <h1>login status</h1>{
      loginjStatus(true)
    }
  </div>
)

};

export default App;



// const status = false;

// if (status === true) {
//   return (
//     <div>
//       <h1>login status</h1>
//       <button type="submit">log out</button>
//     </div>
//   );
// } else {
//   return (
//     <div>
//       <h1>login status</h1>
//       <button type="submit">log in</button>
//       {/* Content for false status */}
//     </div>
//   );
// }