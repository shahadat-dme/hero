// fetch('https://fakestoreapi.com/products')
//     .then(res=>res.json())
//     .then(json=>console.log(json))

fetch('https://fakestoreapi.com/products').then((data) => {
    return data.json();
}).then((completedata) => {
    // console.log(completedata[2].title);
    // document.getElementById('root').innerHTML=completedata[2].title;

    let data1 = "";
    completedata.map((values) => {
        data1 += `
        <div class="card">
        <h1 class="title">${values.title}</h1>
        <img src=${values.image} alt="img" class="images">
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
        </div>
        `
    });
    document.getElementById('cards').innerHTML=data1;
}).catch((err) => {
    console.log(err);
})