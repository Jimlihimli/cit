var score= "에베베베"

if(score > 100 || score < 0 || typeof score == "string"){
  console.log("invalid input.")
}
else if(score>=90){
  console.log("A")
} else if(score>80){
  console.log("B")
} else if(score>70){
  console.log("C")
} else{
  console.log("D")
}