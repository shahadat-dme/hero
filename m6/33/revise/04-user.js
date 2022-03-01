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
function loadAlbums(){
  fetch('https://jsonplaceholder.typicode.com/albums')
  .then(res => res.json())
  .then(data => console.log(data));
}
function loadPhotos(){
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then(res => res.json())
  .then(data => console.log(data));
}
function loadTodos(){
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(data => console.log(data));
}



function loadUserDisplay(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => UserDisplay(data))
}

function UserDisplay(data){
  console.log(data);
}