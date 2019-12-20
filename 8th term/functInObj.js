var dog = {name : "Darcy"}
var cat = {
  name : "Yumi",
  meow : function(name){
          console.log(`Hi! my name is ${name}`)
        },
  meow2 : function(){
                console.log(`Hi! my name is ${this.name}`)//여기서 this는 cat이다
              }
}

function bark(name){
  console.log(`Hi! my name is ${name}`)
}

bark(dog.name)
cat.meow(dog.name)
cat.meow(cat.name)
cat.meow2()

var cat2 = cat
cat2.name = "berry"
cat2.meow2()
