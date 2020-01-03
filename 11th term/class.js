class Movie {

  constructor(namae, dir) {
    this.name = namae
    this.director = dir
  }

  sayDirector(){
    console.log(this.director)
  }

}

a = new Movie("Parasite", "Bong")
b = new Movie("Frozen", "Lee")
console.log(a.name)
console.log(a.director)
b.sayDirector()
