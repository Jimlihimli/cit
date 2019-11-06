function plus5 (num){
  return (num+5)
}

function minus7(param){
  var result = param - 7
  return result
}

function sayHi (name){
  return "Hi, my name is " + name
}

function quadratic (a, b, c){
    return ( -b + (b ** 2 - 4 * a* c) ** (1/2) ) / (2 * a)
}

// console.log( plus5 * sayHi )

sayHi("Tom")
console.log( sayHi("Jane") )


console.log ( plus5(7) )

console.log(    minus7(    plus5 (9)      )   )

console.log( console.log("Dog") )
