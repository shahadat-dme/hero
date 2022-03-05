let inputField = document.getElementById('myInput')
inputField.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById('myBtn').click();
    }
} )