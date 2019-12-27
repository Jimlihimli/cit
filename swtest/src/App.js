import React from 'react';
import logo from './logo.svg';
import './App.css';

let movie = ["moana", "b", "c","frozen" ,"e"]
let name = <p>승우</p>
function some(x) {
  return (<p> {x} </p>)
}


function App() {

  return (
  <div>
    {movie.map( some )  }
    {movie.map( x => (<p>{x}</p>) )  }
  </div>
  );
}//return(JSX)-항상 div박스(그 이외에도 p도)는 하나만 존재해야 함.

export default App;


    //
    // <p> 강 : </p>
    // <br/>
    // {name}
    // <input/>
