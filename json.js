// JavaScript objects look like ruby hashes

console.log("***** Basic JavaScript Objects *****")

var molly = {
  species: "dog", // <<-- use colon and a comma
  name: "Molly",
  color: "black", // <-- in RUBY this extra comma would break a hash. Does not break a JSON object
}

// calling on an object:
console.log("Molly: ")
console.log(molly)
console.log(molly.species) // dot notation
console.log(molly["species"]) // bracket notation

// the awesome thing about json objects is that you can add functions directly to it.

var rachel = {
  species : "dog",
  name : "Rachel",
  color : "brown",
  greeting : function(){
    console.log("Woof!")
  }
}

console.log("Rachel: ")
console.log(rachel)
console.log(rachel.greeting) // without parenthesis
console.log(rachel.greeting()) // actually calling the function

console.log("***** JavaScript Constructors *****")

var Dog = function(name, color, breed){
  this.name = name
  this.color = color
  this.breed = breed
  this.greeting = function(){
    console.log("Woof!")
  }
}

console.log(Dog)
try {
  console.log(Dog.greeting())
} catch(err) {
  console.log("Error! Dog is not an object, it is an object constructor")
}

// you have to make an instance of it
var mary = new Dog("Marathon", "spotted", "border collie")
console.log(mary)

var lacie = new Dog() // no arguments no error
console.log(lacie)
lacie.name = "lacie"
console.log(lacie.name)

var max = new Dog("Max", "black", "mutt", "hooligan") // too many arguments, no errors
console.log(max)

console.log("***** Protoypying *****")

Dog.prototype.speak = function(){
  this.greeting()
}

Dog.prototype.age = 4;

console.log("Max, speak!")
max.speak()
console.log('************')
mary.speak()
console.log(mary.age)
console.log("Good dog.")

alfred = new Dog()
console.log('Alfred')
console.log(alfred)
console.log(alfred.age)



















