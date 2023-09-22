// Creating an array of colors
const colors = ['red', 'green', 'blue', 'yellow', 'green'];

// Using lastIndexOf() to find the index of the last occurrence of 'green'
const lastIndex = colors.lastIndexOf('green');
console.log(lastIndex); // Output: 4 (because 'green' is last found at index 4)

// Using lastIndexOf() to find the index of 'purple' (not in the array)
const notFoundIndex = colors.lastIndexOf('purple');
console.log(notFoundIndex); // Output: -1 (because 'purple' is not in the array)
