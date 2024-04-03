//define array of type anny
const names: string[] = [];
// push string of my name
names.push("aj");
//push string my name
names.push(3)

console.log(names);

// they string and number are pushed into the array becuase the type of array is any. if it were string or number it would error .. try it!
// error when  tried as type string: Argument of type 'number' is not assignable to parameter of type 'string'