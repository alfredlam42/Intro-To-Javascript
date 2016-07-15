# Intro-To-Javascript

### Basics:

#### Data types:
 - Primatives: String, int, boolean, null, undefined
 - Objects

| Ruby            | JavaScript    | Explanation |
| :-------------: |:-------------:|:----------------------------------:|
| "4" == 4 :> false           | "4" == 4 :> true                                      | == is a type coersive, and a loose equality checker   |
|                             | "4" === 4 :> false                                    | 4 === 4 :> true                                       |
| falsys: nil, false          | falsys: null, undefined, 0, NaN, ""                   | null == undefined, but undefined != false             |
| "My name is #{name}."       | "My name is " + name + "."                            | JS does not have string interpolation                 |
| p "this is ruby"            | console.log("this is javascript")                     |                                                       |
| [1,2].push(4) :> [1,2,4]    | [1,2].push(4) :> 3                                    | returns the length of the newly created array         |
| a = 0                       | var a = 0                                             |                                                       |
| a += 1 :> 1 :> a == 1       | a++ :> 0 :> a === 1                                   | (variable)++ adds one but returns the variable before |
| | ++a :> returns 2, a === 2 | ++(variable) adds one to the variable then returns it |

#### Variables

Declaring a Variable:
```javascript
 $ var firstName = "Ash"

 $ var lastName = "Ketchum"

 $ var name = firstName + " " + lastName

 $ var names; // creates a variable to be defined. If called you get undefined.

 $ var names = [];
 ```

#### Functions

Declaring a Function:

```javascript
 $ var combineName = function(firstName, lastName){
     return(firstName.concat(" ", lastName))
   }

 $ function sayHello(){
     return "Hello, World."
   }

 // IIFE -- immediately invoked function expression
 $ var x = (function(){
    var p = "asdf" // cannot access var p from the console. It's more protected!
    return function(input){
      return p === input
    }
  })()

 //ES6 function notation, called Arrow Functions
 $ var x = (num) => { return num * num }
```

Calling a Function:
```javascript
 $ sayHello
 :> function (){ return "Hello, World." }

 $ sayHello()
 :> "Hello, World."

 $ x()
 :> false

 $ x("asdf")
 :> true
```
#### Objects:

Declaring Objects
```javascript
// object literals
var batMan = {
  firstName: "Bruce",
  lastName: "Wayne",
  company: "Wayne Enterprises",
  greeting: function(name){
    return "Hello " + name
  }
}

batMan.car = { make: "Batmobile", year: 1966}

```

Calling Objects:

```javascript
$ batMan.firstName
:>"Bruce"

$ batMan["company"]
:>"Wayne Enterprises"

$ batMan.greeting
:>function (name){return "Hello " + name}

$ batMan.greeting("Alfred")
:>"Hello Alfred"

$ batMan.car
:>Object {make: "Batmobile", year: 1966}

$ batMan.car.make
:>"Batmobile"

```

#### Classes... sort of

```javascript

// contrcructor functions

var Person = function(firstName, lastName, gender){
  this.firstName = firstName
  this.lastName = lastName
  this.gender = gender
}

$ var ash = new Person("Ash", "Ketchum", "M")
$ ash.profession = "Pokemon Master"

$ var bruce = new Person("Bruce", "Wayne", "M")

$ bruce.profession
:>undefined

$ ash.profession
:>"Pokemon Master"

Person.prototype.greeting = function(){
  return "Hello, my name is " + this.firstName + "."
}

$ ash.greeting()
:>"Hello, my name is Ash."

$ bruce.greeting()
:>"Hello, my name is Bruce."

```

#### What is this?

this is the object you are acting upon.

```javascript

var obj = {
  funct: function(){return this},
  variable: "x"
}

$ obj.funct()
:>Object {variable: "x"}

var Person = function(name){
  this.name = name;
  this.defineThis = this
}

$ var bruce = new Person("Bruce")
$ bruce.defineThis
:>Person {name: "Bruce", defineThis: Person}

var OtherTypeOfPerson = function(name){
  this.name = name;
  this.defineThis = function(){return this}
}

$ var ash = new OtherTypeOfPerson("Ash")
$ ash.defineThis()
:>Person {name: "Ash"}

```
##### This Tips:

use debugger in you code then console.log(this)

this ~ self

declare this to a variable so it can be used later when this changes.

#### Other things:

manipulating the DOM:

"$" -- signifies jquery

```javascript
$('h3').append('<img src="http://i.imgur.com/nZlaeSH.jpg">')

// OR

var h3 = document.getElementsByTagName("h3")
for (var i = 0; i < h3.length; i++){
  h3[i].outerHTML = '<img src="http://i.imgur.com/nZlaeSH.jpg">'
}

// jquery makes it easier.

```

### AJAX - your first introductions

<b>Think of an ajax reqest like an amazon order. </b>

If your computer receives something in a format it is not expecting, it gets mad (ex: expecting HTML and gets back JSON). What am I supposed to do with spatulas? I ordered a whisk.

If you send something to the database, like in a post request, and it's not in the format your backend is expecting, you'll get an error or failure. (ex: sending a single variable, but the backend expects full form of data). How am I supposed to understand this clingon character set? I speak English.

#### Get Request:

All you are doing is GETTING something from a site or file

Things you need:

 - url
 - datatype you are expecting back (optional)

#### Post Request:

You are changing things in the database.

Things you need:

 - url
 - method "POST"
 - datatype expecting back
 - the data you are sending (often as a single variable or a json object)


EXAMPLE:

```javascript
$.ajax({                  // Check it out! You're just sending JSON
  url: "example.html",    // Where are you sending your request?
  method: "POST",         // Are you posting or getting?
  data: {name: "Marathon", color: "spotted"},     // What are you sending?
  dataType: "JSON"        // What do you expect back
}).done(function(response){     // what happens when it worked
  conosle.log("Success!")
  // do something with the response
}).fail(function(response){     // what happens when it didn't work
  console.log("Something didn't work.")
  console.log(response)
})

```




```
#### Naming Conventions

CamelCasing : Objects
snakeCasing : variables and functions
UPPERCASE : constant


