const unicodeValues = [72, 101, 108, 108, 111]; // Unicode values for "Hello"

// Create a string from the Unicode values
const resultString = String.fromCharCode(...unicodeValues);

console.log(resultString); // Output: "Hello"
