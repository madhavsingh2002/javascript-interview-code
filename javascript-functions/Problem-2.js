function uppercase(str) {
    // Split the input string into an array of words using space (' ') as the separator
    var array1 = str.split(' ');
  
    // Create an empty array to store the modified words
    var newarray1 = [];
      
    // Iterate through each word in the array
    for(var x = 0; x < array1.length; x++) {
      // Capitalize the first letter of the current word and concatenate it with the rest of the word
      newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
  
    // Join the modified words back into a single string using space (' ') as the separator
    return newarray1.join(' ');
  }
  
  // Example usage: Convert the string "the quick brown fox" to title case
  console.log(uppercase("the quick brown fox"));
  