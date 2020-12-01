import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClassExample from './ClassExample';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Example />
    <p>==============================</p>
    <ClassExample />
  </React.StrictMode>,
  document.getElementById('root')
);


function Example(){
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
