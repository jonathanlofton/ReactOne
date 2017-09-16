
function Dog() {
        this.name = ""
        this.age = 0
}

function Person() {
    this.name = ""
    this.age = 0
}


var birthday = function(num) {
    this.age += num
} 

let spunk = new Dog();
spunk.name = "spunky"
let john = new Person();
john.name = "John"

// call or apply when you can use the same function for different classes / objects 

birthday.call(john, 9)
console.log(john.age)
birthday.call(spunk, 7)
console.log(spunk.age)
birthday.apply(spunk, [7])
console.log(spunk.age)

// birthday.bind(john)(7)
// console.log(john.age)


// use bind when you want to have the context of an object
// assigned in a variable
var check = birthday.bind(john)
check(7);
console.log(john)
check(7);
console.log(john)

var check2 = () => birthday.call(john, 7)
check2();
console.log(john)