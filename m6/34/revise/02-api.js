const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}
// loadBuddies()

const displayBuddies = (data) => {
    // console.log(data);
    const buddies = data.results;
    // console.log(buddies);
    const buddiesDiv = document.getElementById('buddies')
    for(const buddy of buddies){
        // console.log(buddy.email);
        // console.log(buddy.name);
        // console.log(buddy.title);
        // console.log(buddy.name.first);
        // console.log(buddy.name.first, buddy.name.last);
        const p = document.createElement('p');
        // p.innerText = buddy.email
        p.innerText = `Name ${buddy.name.first} ${buddy.name.last} ${buddy.email}`
        buddiesDiv.appendChild(p)
    }
}