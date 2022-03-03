console.log('I am here');

const comingAlert = () => {
    alert('Hello')
}

const askPicnic = () => {
    const response = confirm('are you going')
    console.log(response);
    if(response === true){
        console.log('bkash')
    }
    else {
        console.log('nagad');
    }
}


const askName = () => {
    const name = prompt('What is your name?')
    if(name){
        console.log(name);
    }
}