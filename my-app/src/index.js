import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const elem = <h2>Hi, Alex!</h2>;
// const hi = React.createElement('h2', {className: 'item'}, 'Hi, world!');

const text = 'World';

const elem = (
    <div>
      <h2>Hello {text}</h2>
      <input type="text"/>
      <button/>
      <button>click</button>
    </div>
);

ReactDOM.render(
  elem,
  document.getElementById('root')
);


