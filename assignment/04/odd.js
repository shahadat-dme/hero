// let names = ['ruma', 'najma','rani']

// function oddFriends(names){
//     let unique = [];
//     for(let element of names){
//         if(element.length % 2 == 1){
//             unique.push(element)
//         }
//     }
//     return unique
// }
// const u = oddFriends(names)
// console.log(u);


let names = ['ruma', 'najma','rani',"sokin"]

function oddFriends(names){
    let unique = [];
    for(let i = 1;i < names.length; i++){
        if(names[i].length % 2 == 1){
            unique.push(names[i])
            break
        }
    }
    return unique
}
const u = oddFriends(names)
console.log(u);