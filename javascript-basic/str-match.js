const text = "The quick brown fox jumps over the lazy dog";

// Match all words containing the letter "o"
const matches = text.match(/(\w*o\w*)/g);

console.log(matches);
// Output: ["brown", "fox", "over"]
