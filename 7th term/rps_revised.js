// var user = "가위" // 편의에 따라 "가위" 대신, "S"와 같은문자로 바꿔도 상관없음.
var userArr = ["S", "R", "S", "P", "S", "R", "P"];
var userNumArr = [];
var opponent = [];
var opponentCharArr = [];
var result = [];

function transform() {
  switch (userArr[i]) {
    case "R": {
      userNumArr[i] = 0;
      break;
    }
    case "P": {
      userNumArr[i] = 1;
      break;
    }
    case "S": {
      userNumArr[i] = 2;
      break;
    }
  }
  return userNumArr[i];
}

function inverseTransform(opponentArr, nth) {
  switch (opponentArr[nth]) {
    case 0:
      return "R";
    case 1:
      return "P";
    case 2:
      return "S";
  }
}

function fight(userNumArr, opponent) {
  let detector = (userNumArr[i] - opponent[i] + 3) % 3;
  if (detector == 2) {
    return "패배하셨습니다";
  } else if (detector == 0) {
    return "비기셨습니다";
  } else {
    return "승리하셨습니다";
  }
  // if((userNumArr[i]-opponent[i]+3)%3==2){
  //   result[i]="패배하셨습니다"
  //      return result[i]
  // } else if((userNumArr[i]-opponent[i]+3)%3==0){
  //   result[i]="비기셨습니다"
  //      return result[i]
  // } else {
  //   result[i]="승리하셨습니다"
  //      return result[i]
  // }
}

for (var i = 0; i < userArr.length; i++) {
  opponent[i] = Math.floor(Math.random() * 3);
  // userNumArr[i] = transform( userArr[i] )
  transform();
  opponentCharArr[i] = inverseTransform(opponent, i);
  result[i] = fight(userNumArr, opponent);
}

console.log(userArr);
console.log(opponentCharArr);
console.log(result);

//  if(user="S"){
//   userNum = 0
// } else if(user="R"){
//   userNum = 1
// } else if(user="P"){
//   userNum = 2
// } else {
//   console.log("존재하지 않는 경우를 내셨습니다.")
// }

// if(userNum>opponent){
//   console.log("승리하셨습니다")
// } else if(userNum==opponent){
//   console.log("비기셨습니다")
// } else if((userNum=0)&&(opponent=2)){
//   console.log("승리하셨습니다")
// }  else {
//   console.log("패배하셨습니다")
// }

//console.log(Math.floor(   Math.random()*3  ))

// 목표 : User가 제시한 값에 대해서, 랜덤한 값을 컴퓨터가 제시하고,
// 두 값을 비교해 가위바위보 규칙에 맞게 결과를 출력 합니다.
// Math.random() 함수를 이용합니다.
// 지금까지 배운 모든 개념을 이용해야 할겁니다.
// user 변수에 들어있는 값을 바꿔서도 실행해보고,잘작동하는지 확인합시다.
//function 활용을 안해도 될까?

// function에 if가 들어가도 될까?
