import logo from './logo.svg';
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


function WhoAmI (props) {
  return (
    <div>
      <h1>My name is {props.name}, surname - {props.surname}</h1>
      <a href={props.link}>My profile</a>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <WhoAmI name="Alex" surname="Voitka" link="pumba.com"/>
      <WhoAmI name="John" surname="Rembo" link="pumba-1.com"/>
    </div>
  );
}



export default App;
