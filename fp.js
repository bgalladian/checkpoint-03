// Convert the following code to use `.map`

var peoplesAges = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]

// people.forEach(function(person){
//   peoplesAges.push(person.age)
// });

// Convert the following code to use `.filter`

var peopleYoungerThan35 = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
// people.forEach(function(person) {
//   if(person.age < 35){
//     peopleYoungerThan35.push(person)
//   }
// });

peopleYoungerThan35.filter(function(peopleYoungerThan35){
  return peopleYoungerThan35.age < 35;
})

// Convert the following to use `.forEach`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]

people.forEach(function(namesWithLetterS){
  
})
// var peopleWhoseNamesHaveTheLetterS = people.filter(function(person){return person.name.match("s")});
