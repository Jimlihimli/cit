var num = 2

console.log()

console.log(num)
while(num<=70000){
  if(num%2==0){
    num+=1
  }
  console.log(num)
  num+=2
  if(num%3==0){
    num+=2
  }
  if(num%5==0){
    num+=4
  }
  if(num%7==0){
    num+=2
  }

}

// console.log(num)
// for(num=3;num<=70000;num++){
//
// }

//Q1~ Q2 는 191030 과제의 연장문제입니다.

// Q1. while 루프를 이용해, 1~ 70000까지의 모든 소수(prime number)를 출력하세요.
// 나머지가 0이냐 아니냐를 이용한다.

// 자기보다 작은 모든 자연수로 나눈다면?
//if문 안에 if문?
//팩토리얼 활용?




// Q2. Q1을 for 루프를 이용해 수행하세요.

// Q3. 6th term의 rps를 최대한 완성해 봅니다.
