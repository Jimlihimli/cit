var num
var limit = 700

//Q1
num = 1
while (num < limit){
  if (num % 2 == 0){
    num += 1
  }
  console.log(num)
  num += 2
}

// Q2
for (num = 1 ; num < limit; num +=2){
  // if (num % 2 == 0){
  //   num += 1
  // }
  console.log(num)
}

// Q3
var frontNum = 1
var middleNum = 1
var lastNum = 2

console.log(frontNum)
console.log(middleNum)
while(lastNum<=limit){
  frontNum = middleNum
  middleNum = lastNum
  console.log(lastNum)
  lastNum = frontNum + middleNum
}

var frontNum = 1
var middleNum = 1
var lastNum

console.log(frontNum)
console.log(middleNum)
for (lastNum = 2 ; lastNum <= limit ;  lastNum = frontNum + middleNum){
  frontNum = middleNum
  middleNum = lastNum
  console.log(lastNum)
}


// Q3. while 루프를 이용해, 1~ 70000까지의 모든 피보나치수를 출력하세요.-해결
// Q4. Q1을 for 루프를 이용해 수행하세요.

// Q5. while 루프를 이용해, 1~ 70000까지의 모든 소수(prime number)를 출력하세요.
// 나머지가 0이냐 아니냐를 이용한다.
// 자기보다 작은 모든 자연수로 나눈다면?
var num = 1




// Q6. Q1을 for 루프를 이용해 수행하세요.
