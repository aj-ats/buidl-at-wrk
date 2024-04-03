// TypeScript can infer the type of an array if it has values.
const nums = [1, 44, 2, 55];
nums.push(4);

nums.push("2") // see how this throws error ? its becuase ts infered that the array was numbers from the data inside it. 
// you see this error when ran inf.ts:5:11 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// delete line 5 and try again

console.log(nums)

let last = nums[55]
