ES6 
Methods are functions attached to classes
Properties are constants attached to classes
Classes are just blueprints for JS objects.

... Rest operator used in function e.g. function xyz(...args) {}  takes an unlimited number of arguments and merges them into an array.
... Spread operator used in arrays and objects will copy properties from the referenced obj/array.

Primitive types: nums, stings, booleans -> get copied instead of referenced.cd 



React
useState returns an array. First item is the variable which is being looked at; second item is the function to handle changes in that variable.

So we can use array destructuring to directly point at the variable and its setting function.

The argument passed to useState() is its initial value and will be overwritten upon state change.