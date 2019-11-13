var user = "가위" // 편의에 따라 "가위" 대신, "S"와 같은문자로 바꿔도 상관없음.
var userNum = 0
var opponent = Math.floor(   Math.random()*3  )

if(user="가위"){
  userNum = 0
} else if(user="S"){
  userNum = 0
} else if(user="바위"){
  userNum = 1
} else if(user="R"){
  userNum = 1
} else if(user="보"){
  userNum = 2
} else if(user="p"){
  userNum = 2
} else {
  console.log("존재하지 않는 경우를 내셨습니다.")
}

if(userNum>opponent){
  console.log("승리하셨습니다")
} else if(userNum>=opponent){
  console.log("비기셨습니다")
} else if((userNum=0)&&(opponent=2)){
  console.log("승리하셨습니다")
}  else {
  console.log("패배하셨습니다")
}




//console.log(Math.floor(   Math.random()*3  ))


// 목표 : User가 제시한 값에 대해서, 랜덤한 값을 컴퓨터가 제시하고,
// 두 값을 비교해 가위바위보 규칙에 맞게 결과를 출력 합니다.
// Math.random() 함수를 이용합니다.
// 지금까지 배운 모든 개념을 이용해야 할겁니다.
// user 변수에 들어있는 값을 바꿔서도 실행해보고,잘작동하는지 확인합시다.
//function 활용을 안해도 될까?


// function에 if가 들어가도 될까?
