import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Car,Name2} from "./test.js"



function App() {

  return (
  <div>
    <Name2 nam = "SW"/>
   <Car brand = "Hyundai" model ="avante" color = "orange" />
  </div>
  );
}//return(JSX)-항상 div박스(그 이외에도 p도)는 하나만 존재해야 함.
//comment를 jsxx안에 쓰는 것을 피하자!
//function에서 하나의 fucntion이 다른 function을 가져오는 것이 가능하다.
//function이나 class로도 react의 component를 나타낼 수 있다
export default App;



// <div>
//   {movie.map( some )  }
//   {movie.map( x => (<p>{x}</p>) )  }
// </div>

    //
    // <p> 강 : </p>
    // <br/>
    // {name}
    // <input/>
