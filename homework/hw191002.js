// 공항 출국 검사 심사대

var person = {
  name : "",
  nationality : "",
  drug : true,
  luggageWeight : 27,
  cash : 33
}

// // 첫번쨰 심사대 : nationality에 따라서
// 다른 담당관을 배치해 줍니다.
// 한국인 : "안녕하세요, 무슨 일로 출국하시나요?"
// 미국인 : Hi, what's your perpose of travel?
// 일본인 : Ohayo. ryoukono mokutekiwa nandesuka?
// switch문법을 사용합니다.
//
// // 두번째 심사대 : drug소지여부에 따라.
// drug를 갖고 있으면 : 당신 나가!
// 없으면 : 통과입니다.
//
// // 마지막 심사대 : 수하물검사
// 무게가 30kg 이상이면 : 20 달러의 추가 금액.
// 25 이상이면 : 10달러의 추가금액.
// 20 이상이면 : 5달러의 추가금액.
//
// 추가금액에따라, cash를 지불하고 남은 금액을 출력
//
// Oh my god, 내 지갑에 cash달러밖에 안남았네!
