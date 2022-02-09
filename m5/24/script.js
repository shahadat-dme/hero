// const li =  document.createElement('li')
const li =  document.createElement('li')
li.innerText = 'Blog-4';
const ul = document.getElementById("blog-list")
ul.appendChild(li);

// let p = document.createElement('p')
// console.log(p);

const h1 = document.createElement("h1");
const underline = document.createElement("u");
underline.innerText = "Hello World!";
h1.append(underline);
document.body.append(h1)

const h2 = document.createElement("h2");
h2.innerText = "Bangladesh"
document.body.append(h2)