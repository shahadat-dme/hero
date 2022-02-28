const user = { id: 11, name: "Gorib", job: 'actor'}
console.log(user);

// converted json
const stingified = JSON.stringify(user);
console.log(stingified);

//normal javascript
const converted = JSON.parse(stingified)
console.log(converted);