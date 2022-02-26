const first = {a : 1, b : 2};
const second = { a : 1, b : 2};
const third = first;

// if( first == second) {
if( first == third) {
    // console.log('Equal');
}else{
    // console.log('Objects are different');
}


if(JSON.stringify(first)==JSON.stringify(second)) {
    console.log('Equal');
}else{
    console.log('Objects are different');
}


const first2 = {a : 1, b : 2};
const second2 = { b : 1, a : 2};

if(JSON.stringify(first2)==JSON.stringify(second2)) {
    console.log('Equal');
}else{
    console.log('Objects are different');
}


function compareObjects(obj1, obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    for (const prop in obj1){
        if(obj1[prop] !== obj2[prop]){
            return false;
        }
    }
    return true;
}
const isEqual = compareObjects(first2, second2);
console.log(isEqual);