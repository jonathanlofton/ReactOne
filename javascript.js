
function Dog(name) {
        this.name = name
        this.age = 0
}

function Person(name) {
    this.name = name
    this.age = 0
}

var birthday = function(num) {
    this.age += num
} 

let spunk = new Dog("spunky");
let john = new Person("john");

// call or apply when you can use the same function for different classes / objects 
// use call apply or bind when you want to pass a different this value to the function. 


birthday.call(john, 9)
console.log(john.age)
birthday.call(spunk, 7)
console.log(spunk.age)
birthday.apply(spunk, [7])
console.log(spunk.age)

// use bind when you want to have the context of an object
// assigned in a variable

// Bind explicitly states the object that is bound to this
var check = birthday.bind(john)
check(7);
console.log(john)
check(7);
console.log(john)

// check2([3, 4, 5]);
// console.log(john)
// check2(4);
// console.log(john)


// My Flatten 

const flatten = (array, result = []) => {
    array.forEach(element => {
        if (typeof element == 'object') {
            // use concat because otherwise you 
            // would be creating a circular reference
            result.concat(flatten(element, result));
        } else {
            result.push(element);
        }       
    })
    return result;
}

console.log(flatten([1,2,3,[2,3,[3],1,2]]))

// Fibonacci 

const fibonacci = (num) => {
    if (num < 1) { return 0 }
    if (num === 1) { return 1 }

   return (fibonacci(num - 1) + fibonacci(num - 2))
}

console.log(fibonacci(10))