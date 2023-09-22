const text = "Hello, World!";

// Get the Unicode value (code point) of the character at index 0 (the first character)
const firstCharUnicode = text.charCodeAt(0);
console.log(firstCharUnicode); // Output: 72 (Unicode value for "H")

// Get the Unicode value of the character at index 7 (the comma)
const commaCharUnicode = text.charCodeAt(7);
console.log(commaCharUnicode); // Output: 44 (Unicode value for ",")

// Get the Unicode value of a character at an out-of-range index
const outOfRangeCharUnicode = text.charCodeAt(15);
console.log(outOfRangeCharUnicode); // Output: NaN (Not-a-Number, as the index is out of range)
