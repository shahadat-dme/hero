function Data(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}
//automatic call 
// Data();

function loadUser(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
}

function loadPost(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => console.log(data));
}

function loadComment(){
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(res => res.json())
  .then(data => console.log(data));
}