const sentence = "The quick brown fox jumps over the lazy dog. The dog is happy.";

// Find the index of the last occurrence of the word "dog"
const lastIndex1 = sentence.lastIndexOf("dog");
console.log(lastIndex1); // Output: 44 (the last "dog" starts at index 44)

// Find the index of the last occurrence of the letter "e"
const lastIndex2 = sentence.lastIndexOf("e");
console.log(lastIndex2); // Output: 42 (the last "e" is at index 42)

// Attempt to find the index of "cat" (not in the string)
const lastIndex3 = sentence.lastIndexOf("cat");
console.log(lastIndex3); // Output: -1 (the substring "cat" is not in the string)
