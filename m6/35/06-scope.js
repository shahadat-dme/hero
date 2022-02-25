// Block Scope 
// function add(first, second){
//     const result = first + second;
//     console.log(result);
//     return result;
// }
// const sum = add(11, 35)

// Global Scope 
/*
const favNum = 27;
function add(first, second){
    const result = first + second;
    // console.log(result);
    // console.log(favNum);
    if(result > 9){
        const mood = 'happy';
        console.log(mood);
    }
    return result;
}
const sum = add(11, 35)
*/

const favNum = 27;
function add(first, second){
    const result = first + second;
    if(result > 9){
        const mood = 'happy';
        console.log(mood);
    }
    return result;
}
const sum = add(11, 35)