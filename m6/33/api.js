// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}
// loadData();
function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
}

function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
}



function loadUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}
function displayUsers(data){
    // console.log(data);
    const ul = document.getElementById('users')
    for(const user of data){
        console.log(user.name);
        const li = document.createElement('li')
        // li.innerText = 'Ami new Users';
        // li.innerText = user.name;
        li.innerText = `name: ${user.name} Email: ${user.email}`;
        ul.appendChild(li)
    }
}