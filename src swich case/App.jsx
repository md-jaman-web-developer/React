

const App = () => {
 const status=true;

 switch (status) {
  case true:
     return <button type="button">log out</button>
    case false:
       return <button type="submit">log in</button>
  default:
    return null
 }

};

export default App;