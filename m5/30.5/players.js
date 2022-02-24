function setPlayerStyle(player){
    player.style.border = '1px solid gray';
    player.style.margin = '10px';
    player.style.padding = '10px';
    player.style.borderRadius = '15px'
}
const players = document.getElementsByClassName('player');
for(const player of players){
    // console.log(player);
    setPlayerStyle(player);
    // player.addEventListener('click', function(){
    //     player.style.backgroundColor = 'cyan'
    // })

}
function addPlayer(){
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
    <p>During our sojourn on earth, we enjoy umpteen 
        blessings. Have we ever wondered why we are at the
        receiving end of so many blessings? Is life on earth 
        an opportunity an opportunity to discover the source 
        of all blessings and ask what He wants asks Yousuf 
        Mahbubul Islam, PhD. Just uploaded</p>
    `
    setPlayerStyle(player)
    playersContainer.appendChild(player)
}
document.getElementById('players').addEventListener('click',function(event){
    // console.log(event.target.tagName.toLowerCase());
    if(event.target.tagName.toLowerCase() == 'div'){
        event.target.style.backgroundColor = 'yellow';
    }else{
        console.log(event.target.parentNode);
    }
})





// document.querySelector('#playes .player:first-child')
// document.querySelectorAll('#playes .player:first-child')