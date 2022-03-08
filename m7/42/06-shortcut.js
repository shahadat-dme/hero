// number to String

const num1 = 52;
console.log(num1);
const numStr = num1 + '';
console.log(numStr);

// String to Number
const input = '560'
const inputNum = +input;
console.log(inputNum);

// const isActive = true;
const isActive = false;
const showUser = () => console.log('Display User');
const hideUser = () => console.log('Hide User');
// isActive ? showUser() : hideUser;
// isActive && showUser();
// isActive || showUser();

isActive = !isActive