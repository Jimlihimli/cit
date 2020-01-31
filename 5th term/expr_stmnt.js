var hour = 8

console.log(hour < 7)

// console.log (  var hour = 7  )
// console.log(  console.log("it's still night!")  )
if (hour < 7){
  console.log("it's still night!")//if의 (local) scope안에 있는 코드
  console.log(hour)
} else{
  console.log("wake up!")//else의 (local) scope안에 있는 코드
}

console.log("finished!") // global scope의 코드


// if (statement / control ) 의 구조
//
// if ( expr ){
//   code
// }else {
//   code
// }
