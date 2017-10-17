
const data = [
  {name: "lucy", age: 25, height: 6},
  { name: "jonathan", age: 25, height: 5.7 },
  { name: "kevin", age: 23, height: 6 },
  { name: "mallik", age: 23, height: 5.11 },
  { name: "sean", age: 23, height: 5.7 },
]


// Filter 
const youngAndShort = data.filter(person => person.age < 25 && person.height < 6)
console.log(youngAndShort)


// Map 
const everyoneIsTall = data.map(person => person.height = 7)
console.log(everyoneIsTall)


// Sort 
const youngestToOldest = data.sort((a, b) => a.age > b.age ? 1 : -1)
console.log(youngestToOldest)