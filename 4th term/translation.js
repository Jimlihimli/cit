var person={
  name: "Lee",
  nationality: "Japan",
  married: true,
  age: 27
};

switch(person.nationality){
  case "Korea":{
    console.log("안녕하세요")
    break
  }
  case "Japan":{
    console.log("곤니찌와")
    break
  }
  case "USA":{
    console.log("헬로")
    break
  }
  case "Hong Kong":{
    console.log("니하오")
    break
  }
  default :{
    console.log("지원하지 않는 나라입니다.")
  }
}
