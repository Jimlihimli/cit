class Movie {

  constructor(name, dir) {
    this.name = name
    this.director = dir
  }

  sayDirector(){
    console.log(this.director)
  }

}

//John Wick , shakeCam : 100

class ActionMovie extends Movie{
  constructor(){
    super();
    this.shakeCam = 100;
  }
  Action(){
    return this.director + "decided shakeCam to be" + this.shakeCam;
  }
  // interview : {director} decided shakeCam to be {shakeCam}
}

// YoureNext , jumpScare : 100

class HorrorMovie extends Movie{
  constructor(name, director, jumpScare){
    super(name, director);
    this.jumpScare = jumpScare;
  }
  Horror(){
    return this.name + "has" + this.jumpScare + "of jumpScares"
  }
  // warning : {name} has {jumpScare} of jumpScares.
}
 a = new ActionMovie("John Wick", "stahelski",200)
 b = new HorrorMovie("You're next", "Lee",300)

 console.log(a.Action())
 console.log(b.Horror())


 function eat(food){
   drink = "I drink " + food
   return "I eat " + food
 }

console.log(eat)//function 자체의 내용과 구조를 의미함
console.log( eat("milk") )
//stahelski  decided shakeCam to be 100
// YoureNext has 100 of jumpScares.
// you must use methods, no + inside console.log() is allowed.
