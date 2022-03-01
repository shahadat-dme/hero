function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => User(data))
}

function User(data){
    // console.log(data);
    const ul = document.getElementById('users')
    for(const user of data){
        // console.log(user.name);
        const li = document.createElement('li')
        // li.innerText = user.name
        li.innerText = `Name: ${user.name} || Email: ${user.email}`
        ul.appendChild(li)
    }
}


function loadUserDisplay(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => UserDisplay(data))
}

function UserDisplay(data){
    // console.log(data);
    for(const user of data){
        console.log(user);
        console.log(user.name);
        console.log(user.username);
        console.log(user.email);
        console.log(user.phone);
        console.log(user.address);
        console.log(user.website);
        console.log(user.company);
    }
}



function loadPostDisplay(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => UserPostDisplay(data))
}

function UserPostDisplay(data){
    // console.log(data);
    for(const user of data){
        console.log(user);
        console.log(user.id);
        console.log(user.title);
        console.log(user.body);
    }
}

function loadPhotoDisplay(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => UserPhotoDisplay(data))
}

function UserPhotoDisplay(data){
    // console.log(data);
    for(const photo of data){
        console.log(photo);
        console.log(photo.id);
        console.log(photo.title);
        console.log(photo.url);
        console.log(photo.thumbnailUrl);
    }
}


function createElementDemo(){
    const ul = document.getElementById('users')
    const li = document.createElement('li')
    li.innerText = 'Home'
    ul.appendChild(li)

    const a = document.createElement('a')
    a.innerText = '#'
    li.appendChild(a)
}