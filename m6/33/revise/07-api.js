//get
function loadPostDisplay(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(post => UserPostDisplay(post))
}

function UserPostDisplay(posts){
    // console.log(posts);
    const postContainer = document.getElementById('posts')
    for(const post of posts){
        // console.log(post);
        // console.log(post.id);
        // console.log(post.title);
        // console.log(post.body);
        const div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML = `
        <h3>${post.title} </h3>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div)
    }
}
//post
function addPost(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: 'My new Post',
            body: "This is first post",
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
    }
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}


//GET  Listing all resources 
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((json) => console.log(json));

// POST Creating a resource
fetch('https://jsonplaceholder.typicode.com/posts', {
method: 'POST',
body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
}),
headers: {
    'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((json) => console.log(json));

  // PUT Updating a resource
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


  // PATCH Patching a resource
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// DELETE Deleting a resource
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});


{/* <div id="posts"></div> */} // html code

{/* <button onclick="AddElement()"></button>

function AddElement(){
//
}
AddElement(); */}

// const postContainer = document.getElementById('id')
// const div = document.createElement('div')
// div.classList.add('post')
// div.innerHTML = `
// <h3>New title </h3>
// <p>New Description</p>
// `;
// postContainer.appendChild(div)



// const postContainer = document.getElementById('posts')
// const div = document.createElement('div')
// div.classList.add('post')
// div.innerHTML = `
// <h3>${post.title} </h3>
// <p>${post.body}</p>
// `;
// postContainer.appendChild(div)