// red // onclick
function makeRed(){
    document.body.style.backgroundColor = 'red'
}

// blue //id
const blueButton = document.getElementById('make-blue-button')
blueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue'
}

// green //make-green-button
const greenButton = document.getElementById('make-green-button')
greenButton.onclick = function makeGreen(){
    document.body.style.backgroundColor = 'green'
}

// cyan //make-cyan-button
const cyanButton = document.getElementById('make-cyan-button')
cyanButton.addEventListener('click',makeCyan)
function makeCyan(){
    document.body.style.backgroundColor ='cyan'
}

//hotpink
const hotpinkButton = document.getElementById('make-hotpink-button')
hotpinkButton.addEventListener('click',function makehotpink(){
    document.body.style.backgroundColor = 'hotpink'
})


//ligthblue
document.getElementById('make-lightblue-button').addEventListener('click',function(){
    document.body.style.backgroundColor = 'lightblue'
})



//common event function
function handleJustFunctionClick(){
    const clickingMethod = document.getElementById('clicking-method');
    clickingMethod.innerText = 'set by function'
}

//Direct
document.getElementById('handle-event').addEventListener('click',function(){
    const handleEvent = document.getElementById('clicking-method');
    handleEvent.innerText = 'set by Direct event lister'
})


document.getElementById('update-name').addEventListener('click',function(){
    const nameField = document.getElementById('name-field');
    const clickingMethod = document.getElementById('clicking-method');
    clickingMethod.innerText = nameField.value
    nameField.value = '';
    // nameField.innerText = 'set by Direct event lister'
    // console.log(nameField.value);
})