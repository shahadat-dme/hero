function AddElement(){
    const postContainer = document.getElementById('post')
    const div = document.createElement('div')
    div.classList.add('posts')
    div.innerHTML = "Todos";
    postContainer.appendChild(div)
}

function AddElementBacktick(){
    const postContainer = document.getElementById('post')
    const div = document.createElement('div')
    div.classList.add('posts')
    div.innerHTML = `
    <h3>New title </h3>
    <p>New Description</p>
    `;
    postContainer.appendChild(div)
}
// AddElement();



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