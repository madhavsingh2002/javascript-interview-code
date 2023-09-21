// Let's the simple solution.....

function uppercase(str){
    // use a regular expression to find the first letter of each word and capitalize it..
    return str.replace(/\b\w/g,function(char){
        return char.toUpperCase();
    })
}
// 
console.log(uppercase('the quick brown fox'))// THank's for watchingg...

// we use a regular expression (/\b\w/g) to find the first letter of each word 
// (where \b matches word boundaries and \w matches word characters), and then 
// we use the callback function to capitalize each found letter. This approach 
// simplifies the code and achieves the same result.