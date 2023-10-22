
const   Hero = (props) => {
    return (
        <div>
           <ol>
           <li>name: {props.item['name']}</li>
          <li>city: {props.item['city']}</li>
          <li>age: {props.item['age']}</li>

           </ol>
        </div>
    );
    }
export default Hero;