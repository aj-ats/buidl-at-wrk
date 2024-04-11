//this example is broken af try to fix so the tuple is logged in console and cannot be changed
// tuple is a typed array with pre defined length and types for each index.  I
// define a tuple  - best practice is to define as a readonly becuase it has pre deterimend data
var daTup;
// give params
daTup = ['aj', true, [5, 5, 5]];
// try to push data 
daTup.push('pushhhhhhh');
console.log(daTup);
// learned that I cant put an array inside a tupple
// change empty array to number and pass thru a number for a good tuple example
// make sure to initliaze the tuple correctly.  if aj and true were swapped in line 5 then it would error bc initalized incorrectly. aj isnt a bool
