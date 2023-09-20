
// Define a function called Reverse_num that takes a numerical input num
function Reverse_num(num){
	// Convert the num input to a string by concatenating it with an empty string...
	num = num +"";
	// use the split() method to conver the string into array of characters...
	// reverse the order of the characters using reverse(), and then join them back into a string..
	return num.split("").reverse().join("");

}
// call the reverse_num function with the input 32243, reverse the digits..
// and then convert the result back to a number using Number()
console.log(Number(Reverse_num(32243)))
