function welcomeMessage(name, greetHandler){
    // console.log(greetHandler);
    greetHandler(name);
}

function greetMorning(name){
    console.log('Good Morning', name);
}
function greetAfternoon(name){
    console.log('Good Afternoon', name);
}
function greetEvening(name){
    console.log('Good Evening', name);
}
welcomeMessage('Shahadat', greetMorning)
welcomeMessage('Dipok', greetAfternoon)
welcomeMessage('Safayet', greetEvening)


// function handlerClick(){
//     console.log('Clicked');
// }
// document.getElementById('my-btn').addEventListener('click',handlerClick)

// document.getElementById('my-btn').addEventListener('click',function(){
//     console.log('Clicked');
// })