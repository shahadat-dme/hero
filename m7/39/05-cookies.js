const getCookie = name => {
    const cookie = document.cookie;
    const allCookie = cookie.split('; ');
    const findCookie = allCookie.find(c => c.includes(name));
    if(findCookie){
        'country=US'
        const cookieNameValue = findCookie.split('=');
        return cookieNameValue[1];
    }
}

// document.cookie
// document.cookie.split(';')
// document.cookie.split(';').map(c => console.log(c))
// document.cookie.split(';').map(c => console.log(c.split('=')))
// document.cookie.split(';').map(c => c.includes('country'))
// document.cookie.split(';').map(c => c.includes('value'))
