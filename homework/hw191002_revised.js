// 공항 출국 검사 심사대

var person = {
  name : "Hong Kim",
  nationality : "Japan",
  drug : true,
  luggageWeight : 27,
  cash : 33,
  leftcash : null
};

// var question
//
// switch(person.nationality){
//   case "Korea":{
//     question = "안녕하세요, 무슨 일로 출국하시나요?"
//     break
//   }
//   case "USA":{
//     question = "Hi. what's your purpose of travel?"
//     break
//   }
//   case "Japan":{
//     question = "こんにちは、どのような事で出国か？"
//     break
//   }
//   default :{
//     question ="지원하지 않는 나라입니다."
//     return
//   }
// }
// console.log(question)

var question = {
  Korea : {
    hello : "안녕하세요",
    out : "나가!"
  },
  USA : "HI",
  Japan  : {
    hello : "konnichiwa",
    out : "deteike!"
  }}

console.log( question[ person.nationality  ].hello )




// if(drug.true)를  썼을 때 오류발생.
if(person.drug){
  console.log( question[ person.nationality  ].out )
  return
} else {
  console.log("통과입니다.")
}

if(person.luggageWeight>=30){
  person.leftcash=person.cash-20
} else if(person.luggageWeight>=25){
  person.leftcash=person.cash-10
} else if(person.luggageWeight>=20){
  person.leftcash=person.cash-5
} else {
  person.leftcash=person.cash
}

console.log("남은 금액 = "+person.leftcash)

//template literal
console.log(`Oh my god, 내 지갑에 ${person.left} 달러밖에 안남았네!`)

console.log("Oh my god, 내 지갑에 "+person.left+"달러밖에 안남았네!")
// // 첫번쨰 심사대 : nationality에 따라서
// 다른 담당관을 배치해 줍니다.
// 한국인 : "안녕하세요, 무슨 일로 출국하시나요?"
// 미국인 : Hi, what's your perpose of travel?
// 일본인 : Ohayo. ryoukono mokutekiwa nandesuka?
// switch문법을 사용합니다.
//-위 해결

// // 두번째 심사대 : drug소지여부에 따라.
// drug를 갖고 있으면 : 당신 나가!
// 없으면 : 통과입니다.
//-위 해결

// // 마지막 심사대 : 수하물검사
// 무게가 30kg 이상이면 : 20 달러의 추가 금액.
// 25 이상이면 : 10달러의 추가금액.
// 20 이상이면 : 5달러의 추가금액.
//-위 해결

// 추가금액에따라, cash를 지불하고 남은 금액을 출력
//-위 해결

// Oh my god, 내 지갑에 cash달러밖에 안남았네!
//
