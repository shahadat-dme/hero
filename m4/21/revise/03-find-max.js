// const business = 450;
// const minister = 850;
// const primeminiter = 750;

// if( business > minister){
//     console.log('Business Bigger');
// } else{
//     console.log('Minister Bigger');
// }

// if( business > minister && business > primeminiter){
//     console.log('Business Bigger');
// } else if(minister > business && minister > primeminiter){
//     console.log('Minister Bigger');
// }else{
//     console.log('primeminiter');
// }

// const max = Math.max(business, minister,primeminiter)
// console.log(max);


// function findLargest(first, second){
//     if(first > second){
//         return first;
//     }else {
//         return second;
//     }
// }
// const largest = findLargest(354, 241,450);
// console.log('largest ', largest);

function findLargest(first, second, third){
    if(first > second && first > third){
        return first;
    }else if(second > first && second > third){
        return second;
    } else{
        return third
    }
}

const largest = findLargest(354, 241,450);
console.log('largest ', largest);