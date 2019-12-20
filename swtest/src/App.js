import React from 'react';
import logo from './logo.svg';
import './App.css';

let name = <p>승우</p>

function App() {

  return (
  <div>
      <p> 이름 : </p>
      <br/>
      {name}
      <input/>
  </div>
  );
}//return(JSX)-항상 div박스(그 이외에도 p도)는 하나만 존재해야 함.

export default App;
