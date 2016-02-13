"use strict"

let dogs = [
  {name: "laddie", breed: "yorkie"},
  {name: "harvey", breed: "pug"},
  {name: "freckles", breed: "rottweiller"},
  {name: "ben", breed: "labrador"},
  {name: "patch", breed: "cockerspaniel"},
  {name: "reggie", breed: "great dane"},
  {name: "bonnie", breed: "labrador"},
  {name: "fluffy", breed: "poodle"}
]

let labradors = dogs.filter(dog => {
  return dog.breed === "labrador"
})

console.log(JSON.stringify(labradors, null, 2))
