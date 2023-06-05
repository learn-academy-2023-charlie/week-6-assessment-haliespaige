// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const hitchhikersCharacters = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// describe("capitalizedNames",() => {
//   it ("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
//     expect(capitalizedNames(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
//   })
// })

//ReferenceError: capitalizedNames is not defined

// b) Create the function that makes the test pass.

//PSEUDOCODE:
// Name: capitalizedNames
// input: array of objects
// output: an array with a sentence about each person with their name capitalized.
// process: Create a function called 'capitalizedNames' with 'array' as the parameter.
//  - Use the .map() method to iterate through eache element of the array and return a new array. Inside the map method use destructuring assignment to directly extract the 'name' and 'occupation' properties from each object. 
// - define a new variable called capitalizedFullName which uses the .split() method to separate the first and last name of each name element into a new array, and the .map() method to iterate over the new array and use the `charAt(0).toUpperCase() + name.slice(1) which capitalizes the first character of the first and last name and appends the remaining characters to each. Use the .join() method with a space to combine the first name and last name back into one element. 
// - Use template literals to embed the expressions capitalizedFullName and occupation into a sentence

// const capitalizedNames = (array) => {
//     return array.map(({ name, occupation }) => {
//       const capitalizedFullName = name.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' ')
//       return `${capitalizedFullName} is ${occupation}.`
//     })
//   }
  
// PASS  Desktop/week-6-assessment-haliespaige/code-challenges.test.js
// capitalizedNames




// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]



// describe("remaindersOnly",() => {
//   it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.",() => {
//     expect(remaindersOnly(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
//     expect(remaindersOnly(hodgepodge2)).toEqual([ 2, 1, -1 ])
//   })
// })

// ReferenceError: remaindersOnly is not defined


//PSEUDO CODE:
//Name: remaindersOnly
//input: mixed data array 
//output: an array of only the remainders of the numbers when divided by 3.
//process: Create a  funciton named remaindersOnly. Use .filter() to iterate through the array and use typeof() method to return a subset of only the numbers within with array.
//Next, use .map() method to iterate through the subset array and pass modulo %3 to return the remainder of each number when divided by 3. 

// b) Create the function that makes the test pass.

// const remaindersOnly = (array) => {
//   return array.filter(num => typeof num === 'number').map(num => num%3)
// }


// PASS  Desktop/week-6-assessment-haliespaige/code-challenges.test.js
// remaindersOnly



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


// describe("cubedNumbers",() => {
//   it("takes in an array of numbers and returns the sum of all the numbers cubed.",() => {
//     expect(cubedNumbers(cubeAndSum1)).toEqual(99)
//     expect(cubedNumbers(cubeAndSum2)).toEqual(1125)
//   })
// })

//ReferenceError: cubedNumbers is not defined

// b) Create the function that makes the test pass.

//PSEUDO CODE:
//Name: cubedNumbers
//input: array of numbers (cubeAndSum1, cubeAndSum2)
//output: the sum of all the numbers in the array cubed. 
//process: Create a function called cubedNumbers that takes in an array. 
// Use the .reduce() method to add up all the cubed elements in the array
// Use the Math.pow() to calculate the cubed of each element in the array. 
// Use the + to add each cubed number to the accumulated sum

// const cubedNumbers = (array) => {
//   return array.reduce((sum, num) => sum + Math.pow(num, 3), 0)
// }

// PASS  Desktop/week-6-assessment-haliespaige/code-challenges.test.js
// cubedNumbers