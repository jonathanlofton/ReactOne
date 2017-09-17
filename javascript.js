
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
// use call apply or bind when you want to pass a different this value to the function. 


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

// Bind explicitly states the object that is bound to this
var check = birthday.bind(john)
check(7);
console.log(john)
check(7);
console.log(john)

var check2 = (x) => birthday.apply(john, x)
check2([3, 4, 5]);
console.log(john)
check2(4);
console.log(john)




// 'this' actually makes your javascript code more ambiguous because reffering to 
// the variable name could actually be mistaken for another global variable of the same name.

// variadic functions are functions that use multiple arguments instead of a set number of arguments