// Creating an array of numbers
const numbers = [3, 4, 5];

// Using unshift() to add elements to the beginning of the array
const newLength = numbers.unshift(1, 2);

console.log(newLength); // Output: 5 (the new length of the array)
console.log(numbers);   // Output: [1, 2, 3, 4, 5]
