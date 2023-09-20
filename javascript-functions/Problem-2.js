function uppercase(str) {
    // Use a regular expression to find the first letter of each word and capitalize it
    return str.replace(/\b\w/g, function(char) {
      return char.toUpperCase();
    });
  }
  
  // Example usage: Convert the string "the quick brown fox" to title case
  console.log(uppercase("the quick brown fox"));
  