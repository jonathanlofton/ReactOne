# Javascript

## What does hoisting mean ?
### To move something to the top
Hoisting means to move something to the top, of a certain place.
On javascript, all the declarations are being hoisted that means that are going to be moved to the top of the actual scope
A declaration in javascript is when we define a variable using var, example var x;
It is important to notice that along with the declaration sometimes we have the initialization, example var x = 10. Whatever happen before the = is declaration whatever happen after the equal is initialization, IMPORTANT initialization is not hoisted.  

## What is the difference between function expression and function declaration?
### A function declaration is going to be hoisted because is a declaration and a function expression is not going to be hoisted, this means that a function declaration is available everywhere and a function expression is only available after is define.
## function declaration 
### function hello(){}
## function expression
### var hello = function(){}
# Main advantages of using prototype?
### It allow simulating inheritance in javascript
### Defining a function on the prototype It has better performance than as an instance method because of no matter the number of instances we create we only have one prototype for all of them.
# Explain the prototype chain?
## The prototype chain is the way javascript simulate inheritance.
## It is important to notice that all object have prototype that is linked to another Object
## Example of the prototype chain whenever we try to access a property of an object, javascript is going to look for that property within that object if that property is not there, JS is going to move to the prototype of that object and verify if that prototype object have that specific property, if not It will move to the prototype of the prototype of the object and look again, and so on util, the prototype object is the Object constructor that is the main object on Js (everything inherits from it).

# What does mean the "this" keyword?
## It is the context or environment where and how the function is being executed.
## The this keyword’s value has nothing to do with the function itself, how the function is called determines the this value
## It can be dynamic, based on how the function is called
## You can change the this context through .call(), .apply() and .bind()

# Is it javascript single thread and how does it handle events?
## Javascript is single threaded language.
## In order to handle asynchronous code or event javascript have an event stack that is going to be filled with all the event that were triggered, while the thread was busy, whenever the thread is free JS is going to be invoking the function that was stored on the event stack before, one by one, until there isn’t any function on the event stack
# Hoes does async code works? (Explain Promises)
## Promises in javascript allow us to handle the asynchronous request in an easier way, pretty much a promise is a function that delays the execution of some code until that function is resolved or reject.

# React

## Explain What does mean the virtual DOM?
### The virtual DOM is the DOM that React use to render the Html DOM.
### The main reason for this is that React have a lot more control of the element that going to render that target a very specific tree to be render, the main advantages are that react is going to be able to render just very specific branches of the DOM tree instead of the whole tree, improving the rendering performance.
### All the events are related to the virtual DOM instead of the HTML DOM, this allows React to have total control of the event that is going to be triggered.
## What is the difference between props and state?
### props are the variables that the component is going to receive as attributes on the jsx syntax, prop does not belong to the component, belong to any of its parents.
### the state is a variable that belongs to the component itself
### The main difference is that we are not supposed to change the value of the props because if we do, it is not going to be any effect on the page, instead if we modify the state the component is going to render again 
### state trigger the render, whenever we define it with the this.setState method

## Explain the lifecycle of a component?
### The lifecycle method is a set of methods that are going to be invoked when something changes on the component, and the render is being triggered
### shouldComponentUpdate, componentWillMount, componentDidMount, rider, etc.
## What are the advantages of using redux?
### On React the variables are only passed from parent to children and not the other way around, (one-way binding). If we would like to change a variable that received as props, we need to use a callback function to change the value on the component that creates it as a state.
### Redux allow the component to require or change the information that we like, having something more related to two-way binding.
## Explain How redux works?
### Redux works with 3 main keywords
### Actions
It is an object that is going to be sent as argument on the dispatch function, this object have a property type that is going to be used to tell the store what information we would like to change
Example: {type:’CHANGE_USER’,payload:’luis’}
### Store/Reducer
The reducer receives the actual state of the application and the action that the dispatch send, this function is going to be executed each time a dispatch function is being invoked, depending on the property type that belongs to the action the reducer is going to mutate the state in order to change that specific information.
### Dispatch
This is a function that allows us to communicate with the store or reducer, receive an action as argument
Example dispatch(action);
## How to handle asynchronous request along with redux?
### Using redux-thunk or redux-promise, having one action per status of the request, (loading, success, error).



# another set 

Technical Questions

	•	What are the main differences between angular and react? 

	•	What is the main reason companies are moving towards React? 

	•	What is the difference between presentational and container components? 

	•	What is the virtual DOM and why is this important? 

	•	What is Redux? 

	•	What is Isomoprhic or Universal Javascript? 

	•	In you own words tell me what Big O Notation is and why it is important? 

	•	What is “closure” in Javascript? 

	•	What is a promise? 

	•	What is the drawback of creating true private methods in JavaScript? 

	•	What is a Javascript task runner you have used? Why are these important? 

	•	What are you strong points as a developer? 

	•	What's the difference between .for Each and .map methods

	•	How would you implement a reverse method on the String type in Javascript

	•	Explain Event Bubbling and Event Delegation.

	•	what is good about React

	•	React component lifecycle

	•	what is the difference of container component and connected component

	•	how to handle different acton inside reducer

	•	how to handle async request in react

	•	what is promose

	•	stateful and stateless component
Interview 

	•	Interview 3 asked questions like, what purpose does the 'this' keyword have and what are its uses? What's the difference between call and apply? If a class object is instantiated in a variable without the 'new' keyword, what does that variable actually contain? The coding exercise was, create a function that takes a string and returns true or false if that string can be rearranged into a palindrome. Also wanted to know how to create a private variable in javascript using either the 'let' keyword or a closure. 

	•	Interview 2 was mostly about closures in javascript, how to create a function limiter that takes a number and a callback function, and only allows that function to be called x amount of times. They also wanted to know about variable hoisting and the difference between var something = function() and function something() = 

	•	Interview 1 covered a little bit of React, the biggest problem was figuring out how to detect when a user has a stopped scrolling and then firing an event (uses a timeout and cleartimeout). The react part didn't matter as much but it was knowing that the setup for the timeout function should be placed either in the constructor or a lifecycle hook event. 


Interview:

1) What is the difference between “==“  & “===“ ? 2) What is the difference between var foo = 1; and foo = 1? 3) What is a closure? 4) const foo = [1,2,3]; foo.duplicate(); ---> [1,2,3,1,2,3]
Here is the right answer

foo.prototype.duplicate = () =>  {  this.concat 

} 
 5) Build simple todo list app in React in JSfiddle

Interview 1 

The coding challenge we did together was this one:

https://www.hackerrank.com/challenges/bigger-is-greater

He asked me to go on the hackerrank challenges site and pick one that had somewhere around 80% success rate.

We got about halfway through it and then he stopped me and said that was good enough.

Interview 2

1) flatten an array with the iterative process, the recursive process, and using the 'apply' method. 

2) given a deck of cards, write a function that will shuffle the deck.

3) write the code to generate 
	•	// console.log('hello'.repeatify(3));
	•	// hellohellohello


Interview 3
1. Given a dictionary mapping keys to values, return the 3 keys mapping to the top 3 values.
{'e': 5, 'a': 7, 'c': 3, 'd': 10, 'b': 8}
-> ['d', 'b', 'a']  2. Flatten the object:
*/
var o = {
  a: {
    m: {
      x: "1",
      y: "2"
    }
  },
  b: "3",
  c: {
    m: "4"
  }
};
/*
output:
{
  a.m.x: 1
  a.m.y: 2
  b: 3
  c.m: 4
}

Interview 4

1. Explain prototypal inheritance
2. Explain closure - give an example
3. Write a function that can only be called once.
4. Explain why redux uses reducers and actions instead of mutating state directly
5.Event Bubbling and Event Delegation.


Interview 5

Concat a nested object.  Nested keys are to be concatenated with a "." in between


Interview: 6

	•	1. how to implement a check-out page
	•	2. reverse a string, performance is important
	•	3. `flow` function in underscore
	•	4. inheritance in Javascript


Interview 7

	•	Write a function that alternates printing ping and pong every 100ms.

	•	What is the output of:
console.log(1);
setTimeout(() => { console.log(2) }, 0 )
console.log(3)

	•	Given a dictionary = {'e': 5, 'a': 7, 'c': 3, 'd': 10, 'b': 8}, print out the keys of the top 3 values


////////////////////////////////////////////////////////////////////////////////////
const nameObj = {
    name: “Nicholas”,
    nestedName: {
      name: “pranay”
    },
    getName:() => {
      console.log(this.name);
    }
}

nameObj.getName.call(nameObj.nestedName);

//call/apply









////////////////////////////////////////////////////////////////////////////////////
function todoApp(state = {}, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
          visibilityFilter: action.filter
      })

      state.visibilityFilter = action.filter
    default:
      return state
  }
}







////////////////////////////////////////////////////////////////////////////////////
<html>
  <body>
    <script>
      var name = “Nicholas”;

      (function () {
        console.log(name);

        var name = “Pranay”

      })()
    </script>
  </body>
</html>


////////////////////////////////////////////////////////////////////////////////////
// add(2,3) => 5
// add(2)(3) => 5

function add (args) {

        if(args.length > 1){
            argument[0]+ argument[1]
            return a + b
        }else{
            return function(b){
                return args + b;
            };


        }

    if 

}
////////////////////////////////////////////////////////////////////////////////////



<html>

<body>

    <div id="main-image>
        <img src="..."/>
    </div>

    <div id="thumbs">
        <img class="thumb-img" src="..."/>
        <img class="thumb-img" src="..."/>
        <img class="thumb-img" src="..."/>
        <img class="thumb-img" src="..."/>
        <img class="thumb-img" src="..."/>
        <img class="thumb-img" src="..."/>
        <img class="thumb-img" src="..."/>
        <img class="thumb-img" src="..."/>
    </div>

<script>





    changeMainImage(imageUrl){

        this.setState({ mainImage: imageUrl });
    }



     const thumbs fetch(){ /api/product/{:someProductId}/images, function(error, req, res){
        for(let i = 0: i < res.length; 1++ ){
            $('#thumbs').append(<ThumbImage src={res[i].thumbUrl} changeMainImage(res[i].mainImageUrl)/>)
        }

    }

    thumbnail.forEach{
        document.getElementId('thumbs').style.backgound = 
    }




</script>

</body>


</html>



/api/product/{someProductId}/images

[{
   mainImageUrl: "..." 
   thumbUrl: "..."
}, {
   mainImageUrl: "..." 
   thumbUrl: "..."
}, {
   mainImageUrl: "..." 
   thumbUrl: "..."
}, {
   mainImageUrl: "..." 
   thumbUrl: "..."
}]

Interview: 8

// Implement following layout in HTML and CSS
// https://giphy.com/gifs/xUPGclGllhF8QhW42Q

// Create a printWithDelay function with the following signature 
// This functions prints out the numbers starting from 0 to endIndex - 1 after the specified delayInMs. (See below screenshot). delayInMs should default to 1000ms or 1s if not passed. You should create two versions of solutions, one with es5 and one with es6
// http://gph.is/2r7dBw0
const printWithDelay = (endIndex, delayInMs) => { 
}

// Create a function convertToString. This converts a given array to its string representation.
// The array can be deeply nested. We should be able to directly call this function on the array object itself.
// For e.g.
// [6,7].convertToString(); // outputs "[6,7]"
// [6,7,[8,9]].convertToString() // outputs "[6,7,[8,9]]"






React

Explain What does mean the virtual DOM?
The virtual DOM is the DOM that React use to render the Html DOM.
The main reason for this is that React have a lot more control of the element that going to render that target a very specific tree to be render, the main advantages are that react is going to be able to render just very specific branches of the DOM tree instead of the whole tree, improving the rendering performance.
All the events are related to the virtual DOM instead of the HTML DOM, this allows React to have total control of the event that is going to be triggered.
What is the difference between props and state?
props are the variables that the component is going to receive as attributes on the jsx syntax, prop does not belong to the component, belong to any of its parents.
the state is a variable that belongs to the component itself
The main difference is that we are not supposed to change the value of the props because if we do, it is not going to be any effect on the page, instead if we modify the state the component is going to render again
state trigger the render, whenever we define it with the this.setState method
Explain the lifecycle of a component?
The lifecycle method is a set of methods that are going to be invoked when something changes on the component, and the render is being triggered
shouldComponentUpdate, componentWillMount, componentDidMount, rider, etc.
What are the advantages of using redux?
On React the variables are only passed from parent to children and not the other way around, (one-way binding). If we would like to change a variable that received as props, we need to use a callback function to change the value on the component that creates it as a state.
Redux allow the component to require or change the information that we like, having something more related to two-way binding.
Explain How redux works?
Redux works with 3 main keywords
Actions
It is an object that is going to be sent as argument on the dispatch function, this object have a property type that is going to be used to tell the store what information we would like to change
Example: {type:’CHANGE_USER’,payload:’luis’}
Store/Reducer
The reducer receives the actual state of the application and the action that the dispatch send, this function is going to be executed each time a dispatch function is being invoked, depending on the property type that belongs to the action the reducer is going to mutate the state in order to change that specific information.
Dispatch
This is a function that allows us to communicate with the store or reducer, receive an action as argument
Example dispatch(action);
How to handle asynchronous request along with redux?
Using redux-thunk or redux-promise, having one action per status of the request, (loading, success, error).