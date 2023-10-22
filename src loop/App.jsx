
const App=()=>  {
  

  const city = ['dhaka', 'london','delhi','kolkata']
  return (
      <div>
        <ol>
        {
          
                      city.map((item,i)=>{
                         return <li key={i.toString()}>{item}</li>
                      })
        }
        </ol>
                     </div>
  )
};

export default App;
