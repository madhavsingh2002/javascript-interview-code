const sentence = "The quick brown fox jumps over the lazy dog";

// Find the index of the word "fox"
const index1 = sentence.indexOf("fox");
console.log(index1); // Output: 16 (the word "fox" starts at index 16)

// Find the index of the letter "z"
const index2 = sentence.indexOf("z");
console.log(index2); // Output: 40 (the letter "z" is at index 40)

// Attempt to find the index of "cat" (not in the string)
const index3 = sentence.indexOf("cat");
console.log(index3); // Output: -1 (the substring "cat" is not in the string)
