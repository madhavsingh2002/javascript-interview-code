// Create a custom object named 'myObject' with a 'value' property set to 42.
const myObject = {
    value: 42,
  
    // Define a 'valueOf()' method for the custom object.
    valueOf: function() {
      // Return the value of the 'value' property when 'valueOf()' is called.
      return this.value;
    }
  };
  
  // Use the '+' operator to add 10 to 'myObject'.
  // JavaScript internally calls 'valueOf()' to convert 'myObject' to a primitive value (in this case, 42),
  // and then performs the addition, resulting in 52.
  console.log(myObject + 10); // Output: 52
  