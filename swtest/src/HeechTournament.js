import React from "react";
import { Button } from "semantic-ui-react";

import egy from "./egypt.PNG";

const celeb = [
  { name: "나연", sajin: egy, alive : true },
  { name: "쯔위", sajin: egy, alive : true },
  { name: "채영", sajin: egy, alive : true },
  { name: "정연", sajin: egy, alive : true },
  { name: "모모", sajin: egy, alive : true },
  { name: "다현", sajin: egy, alive : true },
  { name: "미나", sajin: egy, alive : true },
  { name: "사나", sajin: egy, alive : true }
];

//
// let shuffle = (n) => {
//   arr = []
//   for (i = 0 ; i < n ; i ++){
//     arr[i].ind = i
//     arr[i].val = Math.random()
//   }
//
// }

class HeechTournament extends React.Component {
  render = () => {
    return (
      <div>
        <p>16강</p>
        <div>
        <p> {celeb[0].name} </p>
        <img src = {celeb[0].sajin} / >
        </div>
        <p> 쯔위 </p>
        <Button> 나연이 좋아! </Button>
        <Button> 쯔위가 좋아! </Button>
      </div>
    );
  };
}

export { HeechTournament };
