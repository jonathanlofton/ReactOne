# What is functional Programming

Functional programming 
  - avoids mutating state: because if you have multiple things trying to manipulate the same data bad things can happen
  - avoids shared state 
  - avoids side effects 
    - modifying any external variable
    - logging to the console
    - writing to the screen
    - writing to the network
    - triggering any external process
    - Calling any other functions with side-effects
  - pure functions: same input same output, no side effects

### Avoiding data mutations
  - will give your state a history
  - prevents weird bugs from popping up

### Avoid Side effects 
  - it makes the effects of a program easier to understand
  - easier to test

### Higher order function, first class functions
  - allows us to treat functions as data, assign them to variables pass them to other functions and return them from functions
  - a higher order function either takes a function as an argument returns a function or both
  - ex)