const note = "Don't reassign the variable";
const fullName = 'Shahadat'+' ' + note;
console.log(fullName);

const numbers = [14,45,25,21]
// numbers = [7,88]    //Not Allowed
numbers.push(88)
numbers[2] = 65

const student = {roll: 1001, name :"Shahadat", job: "Dev"}
// student.name = {roll: 1002, name : "Hossain"}   //not Allowed
student.roll = 1005