let hi = 7

function bark(name){
  console.log(`Hi! my name is ${name}`)
}

let meow = (name) => {
  console.log(`Hi! my name is ${name}`)
  return 3
}

function ipad(param1,param2){
  a = param1 + param2
  console.log(a)
  return param1 * param2 * a
  console.log("sdgfhfdsfadghjhfd")//이미 윗줄에서 리턴하고 나왔기 때문에 이 줄은 실행되지 않음
}

let determinant = (a, b, c, d)  => a*d - b*c

function times2(num){
  return num*2
}

console.log(   meow("Arthur")  ) //return value가 있으니 expression
console.log( bark("Teemon") ) //return value가 없으니 statement

console.log( ipad (3,7) )
console.log( (x => x * 2 )(8) )//이런 식으로 익명함수를 만들 수 있음. 한번만 활용하는 경우에 사용 용이
console.log( times2(8)  )
console.log(determinant(1,4,7,-2))
