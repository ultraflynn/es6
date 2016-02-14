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

let labradors = dogs.map((v, i) => {
  v.description = v.name + " is a " + v.breed + " (" + i + ")"
  return v
})

console.log(JSON.stringify(labradors, null, 2))
