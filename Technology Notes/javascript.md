# Javascript

**DOM (Document Object Model)** - the dom is whatever is in the window that can be manipulated (elements(div, classes, ids), links, etc.)

- **var, let, const** - declare variables 
    - var: <=ES5 will allow reassignment and is vague
    - let: ES6 will allow reassignment 
    - const: ES6 will not allow reassignment

- **Builtin methods & Standard Data Types** 
    - Objects, Arrays, Strings, Numbers

- **ES6**
    - Arrow functions
    - rest/spread operator
    - default parameters
    - destructuring - extracting values from objects or arrays and assigning them to named variables
- **closures**: A function within a function, how does the function scope behave?
- **callbacks**: A function passed to another function to signal when there is a result ready?
- **promises**: a way to deal with future values ex. (someFunction().then(val => console.log(val)))

- **Functions & Pure functions**
    - pure functions do something without any side effects, so a pure function would take in an input and return an output without any side effects like a console.log that is also within the function. 

- **Functional Programming Basics**
    - avoids shared state and mutable data which will prevent data from becoming corrupted like having two functions simultaneously mutate the same slice of state.

# JavaScript Questions 
**Can you name two programming paradigms important for JavaScript Developers?**
- **Functional Programming**
    - process of building software using pure functions, immutable data, no side effects,
- **Object Oriented-Programming** 
    - process of building classes and utilizing those classes which will have methods and a state assigned to them to build an application. 

- **What are the different scopes available in JavaScript?**
    **In javascript, scope is the set of variables, objects, and functions that you have access to**
    - Global/Window: will be available to the whole application 
    - local variables: will only be available to the scope that it is currently in

- **ES5 VS ES6**
    - Arrow functions 
    - Classes 
    - Modules:
    - let and const 
    - Promises 
    - Destructing assignment
    - Default parameters:
    - Template literals
    - Multi-line strings 
    - Enhanced Object literals:

- **Fat-Arrow** 
    **positives**
    - Implicit returns if it is a one liner
        - meaning you don't explicitly have to call 'return'
    - Cleans up some of the syntax and makes code more readable compared to regular ES5 functions
    - Doesn't create a new scope
    **negatives**
    - No Binding
        - Cannot reassign 'this' as it 
    - No Constructors
        - Can't create an object with an arrow function
    - No names
        - Have to save the function as a variable to assign a name to it

- **Callback**
    - a function that is passed to another function and intended to be called a later time.
    - a common use case is asynchronous requests

- **Asynchronous**
    - does not wait for work to be completed, it schedules work to be done in the background, usually the browser window.

- **Event-Loop**
    - basically allows asynchronous calls to be run in the background and runs any other code while the asynchronous call is being fullfilled.

- **Prototypal Inheritance**
    - Dog.prototype = Object.create(Animal.prototype)
    will return a new object with its __proto__ set to whatever argument is passed to Object.create.

- **DOM Document Object Model**
     - When running code in the browser, the browser provides an API by which JavaScript code can access the HTML content of a page. All major browsers implement it, thought there are quicks across browsers.
     - example of the API: document.getElementById("cats") asks the browser to find an element with the id
        - getElementById
        - getElementByClassName
        - querySelectorAll
    - **Events** 
        - insert and remove elements, change attributes, but this dynamic modicication of the HTML document would be pointless without event handling.
        - addEventListener('click, submit, etc', callback)
        - the event listener will store a function and call that function when the specific event happens
    - **AJAX**: 
    - **EventPropogation** 
        - If you have a div within a div, if you have the outer div have an eventlistener on it and you click on the inner div the listener will propogate up
        -  to stop propogation you can do e.stopPropagation();
    - **Vanilla JavaScript** 
        - writing in JS without any enhancements or libraries like jQuery
        - you might want to use jQuery with rails b/c it automatically will handle CSRF tokens for us, turn JSON(a string) into JavaScript objects.
        - ex of WMLHTTPREQUEST
            - const xhr = new WMLHttpRequest();
            - xhr.open('OPEN', 'api/path/to/resource');
            - xhr.onload = function () {
                console.log(xhr.status)
                console.log(xhr.responseType)
                console.log(xhr.response)
            }