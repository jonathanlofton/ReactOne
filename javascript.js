
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

var check2 = (x) => birthday.apply(john, x)
check2([3, 4, 5]);
console.log(john)
check2(4);
console.log(john)




// 'this' actually makes your javascript code more ambiguous because reffering to 
// the variable name could actually be mistaken for another global variable of the same name.

// variadic functions are functions that use multiple arguments instead of a set number of arguments
Hello Nicholas!

My name is Jonathan and I'm a Full-stack Software Engineer based out of San Francisco. I pride myself on being a quick learner, look at the three of my most recent projects on my profile, I made all of them in a month and each one is using a different technology. If you have some time check out one my full stack projects 'Drift' (driftmusic.us) which is a single page music app that utilizes the following technologies: React, Redux, Ruby on Rails, and PostgreSQL. 

I have experience in the technologies that Gridium utilizes, which is great because I love working with those technologies as well.I also have an affinity for the Frontend and UI / UX, I can get obsessed with the details of making a website beautiful and intuitive.I'm excited to see what Gridium has in store for the future. 

If you have some more time please checkout my portfolio page (jonathanlofton.com) and get a better idea of who I'am and what I have created!

Thank you for your time.

- Jonathan