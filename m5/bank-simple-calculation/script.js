// tailwind.config = 
// {      theme: 
//     {        extend: 
//         {          colors: 
//             {            clifford: '#da373d',          
//             }        
//         }      
//     }    
// }

document.getElementById('login-submit').addEventListener('click',function(){
    // console.log('button clicked');
    const emailField =  document.getElementById('user-email')
    const userEmail = emailField.value;

    const passwordField = document.getElementById('user-password')
    const userPassword = passwordField.value;

    if(userEmail == 'info@gmail.com' && userPassword == 'asdfgh'){
        // console.log('Valid User');
        window.location.href = 'banking.html'
    }
})