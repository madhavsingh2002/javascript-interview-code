// Define a function called reverse_a_number that takes a numerical input n
function reverse_a_number(n) {
    // Convert the numerical input to a string by concatenating it with an empty string
    n = n + "";

    // Use the split() method to convert the string into an array of characters,
    // reverse the order of the characters using reverse(), and then join them back into a string
    return n.split("").reverse().join("");
}

// Call the reverse_a_number function with the input 32243, reverse the digits,
// and then convert the result back to a number using Number()
console.log(Number(reverse_a_number(32243)));
