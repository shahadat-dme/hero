// JavaScript Cookies vs Local Storage vs Session

localStorage.setItem('name', 'Hossain')
// console.log(localStorage.getItem('name'));
localStorage.removeItem('name')


sessionStorage.setItem('name','Shahadat')
// console.log(sessionStorage.getItem('name'));
sessionStorage.removeItem('name')


document.cookie = 'name = shahadat' + new Date(2020, 0, 1)
document.cookie = 'lastName = Shahadat; expires' + new Date(9999, 0, 1).toUTCString()
console.log(document.cookie);