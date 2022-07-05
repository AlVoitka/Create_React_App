import './App.css';


const Header = () => {
  return <h2>Hello!</h2>
}

const Field = () => {
  return <input placeholder="Вводите" type="text"/>
}

function Btn() {
  const text ='Log in';
  return <button>{text}</button>
}


// function WhoAmI (props) {
//   return (
//     <div>
//       <h1>My name is {props.name}, surname - {props.surname}</h1>
//       <a href={props.link}>My profile</a>
//     </div>
//   )
// }


function App() {
  return (
    <div className="App">
        <Header/>
        <Field/>
        <Btn/>
    </div>
  );
}



export default App;
