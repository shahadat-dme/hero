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
    const clickingMethod = document.getElementById('input');
    clickingMethod.innerText = nameField.value
    nameField.value = '';
    // nameField.innerText = 'set by Direct event lister'
    // console.log(nameField.value);
})


//comment add in page on textarea
document.getElementById('submit-comment').addEventListener('click',function(){
    const commentBox = document.getElementById('new-comment');
    // const userComment = commentBox.value
    const newComment = document.createElement('p');
    newComment.innerText = commentBox.value;

    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(newComment)
    commentBox.value = '';
})


// Delete Button
document.getElementById('delete-btn').addEventListener('click',function(){
    document.getElementById('secret-info').style.display = 'none'
})

//focus
document.getElementById('delete-confirm').addEventListener('focus',function(){
    document.body.style.backgroundColor = 'lightcoral';
    // document.getElementById('secret-info').style.display = 'none'
})

//blur
document.getElementById('delete-confirm').addEventListener('blur',function(){
    document.body.style.backgroundColor = 'white';
    // document.getElementById('secret-info').style.display = 'none'
})

//keydown
// document.getElementById('delete-confirm').addEventListener('keydown',function(){
//     console.log('keydown');
//     const deleteField = document.getElementById('delete-confirm');
//     console.log(deleteField.value)
// })


//keypress
// document.getElementById('delete-confirm').addEventListener('keypress',function(){
//     console.log('keypress');
//     const deleteField = document.getElementById('delete-confirm');
//     console.log(deleteField.value)
// })

//keyup
// document.getElementById('delete-confirm').addEventListener('keyup',function(){
//     const deleteField = document.getElementById('delete-confirm');
//     console.log(deleteField.value)
// })


document.getElementById('delete-confirm').addEventListener('keyup',function(event){
    // const deleteField = document.getElementById('delete-confirm');
    const deleteBtn = document.getElementById('delete-btn')
    if(event.target.value == 'delete'){
        deleteBtn.removeAttribute('disabled')
    }
    else{
        deleteBtn.setAttribute('disabled',true)
    }
})

// change
document.getElementById('delete-confirm').addEventListener('change',function(){
    const deleteField = document.getElementById('delete-confirm');
    console.log(deleteField.value)
})