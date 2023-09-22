const fruits = ['apple', 'banana', 'cherry', 'date'];

// Remove 'banana' and 'cherry' from the array
const removedFruits = fruits.splice(1, 2);

console.log(removedFruits); // Output: ["banana", "cherry"]
console.log(fruits);       // Output: ["apple", "date"]
