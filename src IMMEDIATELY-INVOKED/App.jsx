
const App=()=>  {
  

  let marks=80;
  return (
      <div>
         {(()=>{
            if( marks>=80 && marks<100){
               return <h1>hola a+ paise</h1>
            }else {
              return <h1>felu mia</h1>
            }
          })()}
      </div>
  )
};

export default App;
