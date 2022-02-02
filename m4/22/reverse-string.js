var greeting = "Hello World!"

function reverseString(text){
    let reverse = '';
    for(const letter of text){
        console.log(letter);
        // reverse = reverse + letter
        reverse = letter + reverse 
    }
}
let reversed = reverseString(greeting);
console.log(reversed);