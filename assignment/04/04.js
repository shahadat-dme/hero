const names = ["Shahadat", "Dipok","Dipu","Shahadat"]

// function oddFriend(names){
//     const odd = []
//     for(const element of names){
//         if(element.length % 2 == 1){
//             odd.push(element)
//         }
//     }
//     return odd
// }

function oddFriend(names) {
    const odd = []
    for (let element of names) {
        if ( typeof element != "string") {
        return "heare error message";
        }
        if (element.length % 2 == 1) {
            odd.push(element)
        }
        
    }
    return odd;
}
const uniqueNames = oddFriend(names)
console.log(uniqueNames);