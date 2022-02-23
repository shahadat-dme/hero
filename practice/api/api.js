fetch('https://api.chucknorris.io/jokes/random')
.then(response => {
    return response.json();
    // console.log("API:",response.json());
})
.then((data) => {
    // console.log("DATA is: ", data);

    const joke = data.value;
    console.log("JOKE: " ,joke );
    
    const id = data.id
    console.log("ID: ", id);
})
// .then()
// .then()
.catch()