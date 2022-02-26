// for(let i = 0; i < 10; i++){}
// for(const number of numbers){}   //array
// for(const prop in student){}    // object

const student ={
    name: 'shahadat',
    id: 101
}
for (const prop in student){
    // console.log(student[prop]);
    // console.log(prop);
    // console.log(prop, student[prop]);
}

const keys = Object.keys(student)
// console.log(keys);

for(const prop of keys){
    // console.log(prop, student[prop]);
}

// const entries = Object.entries(student)
// console.log(entries);

//Advance
for(const [key, value] of Object.entries(student)){
    console.log(key, value);
}