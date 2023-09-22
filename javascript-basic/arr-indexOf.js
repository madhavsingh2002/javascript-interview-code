// Creating an array
const fruits = ['apple', 'banana', 'cherry', 'date', 'banana'];

// Using indexOf() to find the index of 'cherry'
const index1 = fruits.indexOf('cherry');
console.log(index1); // Output: 2 (because 'cherry' is at index 2)

// Using indexOf() to find the index of 'banana'
const index2 = fruits.indexOf('banana');
console.log(index2); // Output: 1 (because 'banana' is first found at index 1)

// Using indexOf() to find the index of 'grape' (not in the array)
const index3 = fruits.indexOf('grape');
console.log(index3); // Output: -1 (because 'grape' is not in the array)
