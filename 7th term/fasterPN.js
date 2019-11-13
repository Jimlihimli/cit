var pNumArr = [2]
var tNum = 2
var limit = 700000

while(tNum <= limit){
  for(var i = 0; i< pNumArr.length; i++){
    if(tNum % pNumArr[i] ==0){
      break
    } else if (i == pNumArr.length - 1 ){
      pNumArr[pNumArr.length] = tNum
      console.log(tNum)
      break
    }
  }
  tNum++
}

console.log(pNumArr)
