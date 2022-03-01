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


// const postContainer = document.getElementById('id')
// const div = document.createElement('div')
// div.classList.add('post')
// div.innerHTML = `
// <h3>New title </h3>
// <p>New Description</p>
// `;
// postContainer.appendChild(div)

{/* <div id="posts"></div> */} // html code
// const postContainer = document.getElementById('posts')
// const div = document.createElement('div')
// div.classList.add('post')
// div.innerHTML = `
// <h3>${post.title} </h3>
// <p>${post.body}</p>
// `;
// postContainer.appendChild(div)