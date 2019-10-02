// Seungwoo's code

var price= "ㅏㅓㅗ"
var discountedPrice
  if(price<10){
  discountedPrice= price
} else if(price>=10&&price<30){
  discountedPrice= price/10*9
} else if(price>=30&&price<50){
  discountedPrice= price/10*8
} else if(price>=50&&price<70){ // if 든 elseif 든 똑같다.
  discountedPrice= price/10*7
} else {
  discountedPrice= price/10*6
}

var txt1= "귀하의 지불금액은 "
var txt2= " 입니다."

console.log(txt1+ discountedPrice+ txt2)

////////////////////////////////
// teacher's code.
//
// var price = "ㅏ허호"
// var dcPrice
//
// if (price > 70){
//   dcPrice= price/10*6
// }
// else if (price > 50){
//   dcPrice= price/10*7
// }
// else if (price > 30){
//   dcPrice= price/10*8
// }
// else if (price > 10){
//   dcPrice= price/10*9
// }
// else if(price >0){
//   dcPrice = price
// }
// else{
//   dcPrice = "invalid input."
// }
//
// console.log(`Your price is ${dcPrice} dollars.`)
