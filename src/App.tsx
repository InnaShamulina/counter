import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [count, setCount] = useState(0);

  let maxValue = 10;


  const inc = () => {
    let newValue = ++count
    if (newValue <= maxValue) {
    setCount (newValue)
  } if (  newValue > maxValue )  return
       
  }
  const reset = () => {
    setCount (0)
  }

  return (
    <div className="AppWrapper" >
      <div className='wrapper'> 
      <div className='countWrapper'>
        <div className= {count === maxValue ? 'error' : "notError"}>{count}</div>
        </div>
      <div className='button-box'>
        <button className={count < maxValue ? "active" : "disable"} onClick={inc}>inc</button>
        <button className={count === 0 ? "disable" : "active"} onClick={reset}>reset</button>
      </div>
      </div>
    </div>
  );
}

export default App;
