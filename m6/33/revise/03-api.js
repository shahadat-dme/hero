fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
//   .then(json => console.log(json))
//   .then(json => console.log(json.userId))
//   .then(json1 => console.log(json1.title))
  .then(json2 => console.log(json2.completed))
//   .then(json3 => console.log(json3.userId))


function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}