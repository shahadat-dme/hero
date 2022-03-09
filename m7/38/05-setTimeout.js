// 38-5 Recognize fetch as an Asynchronous activity

console.log('Hello A');

// setTimeout(() => console.log('aasdd'),2000)
// setTimeout(() => console.log("Asynchronous 3"),3000)

// setTimeout(() => {
//     console.log("Asynchronous");
// },[1000])

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

console.log('Hello AB');


// for(let i = 0; i < 40000; i++){
//     console.log(i);
// }