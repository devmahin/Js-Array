// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

// const commonFruits = ['apple', 'banana', 'orange', 'grape', 'strawberry'];
// console.log(commonFruits[3])
// const changeFruit = commonFruits[2] = "MANGO"
// console.log(commonFruits)


// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

const touristDestinationsBangladesh = ['Rangamati', 'Bandarban', 'Kuakata'];
touristDestinationsBangladesh.push('Cox\'s Bazar')
console.log(touristDestinationsBangladesh)
touristDestinationsBangladesh.push('Sundarbans', 'Sylhet')
console.log(touristDestinationsBangladesh)
console.log(touristDestinationsBangladesh.pop())
console.log(touristDestinationsBangladesh)





// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.



const top10BooksBangladesh = [
    "A Golden Age",
    "The Good Muslim",
    "The Hungry Tide",
    "The Blood Telegram: Nixon, Kissinger, and a Forgotten Genocide",
    "A Golden Age",
    "River of Smoke",
    "javascript",
    "The Glass Palace",
    "The Newlyweds",
    "Brick Lane",
    "Interpreter of Maladies"
];
let includesBook = top10BooksBangladesh.includes("javascript")
console.log(includesBook)



// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

// Arrays
const greeting = 'Hello, world!';
const fruits = ['apple', 'banana', 'orange'];
const isStudent = true;
const numbers = [1, 2, 3, 4, 5];

const arrayCheck1 = Array.isArray(greeting)
const arrayCheck2 = Array.isArray(fruits)
const arrayCheck3 = Array.isArray(isStudent)
const arrayCheck4 = Array.isArray(numbers)
console.log(arrayCheck1)
console.log(arrayCheck2)
console.log(arrayCheck3)
console.log(arrayCheck4)



5. Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().