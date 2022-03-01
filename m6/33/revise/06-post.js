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