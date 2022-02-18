const players = document.getElementsByClassName('player');
for(const player of players){
    console.log(player);
    player.style.border = '1px solid gray';
    player.style.margin = '10px';
    player.style.padding = '10px';
    player.style.borderRadius = '15px'
}

function addPlayer(){
    const playersContainer = document.getElementById('players');

}

// document.querySelector('#playes .player:first-child')
// document.querySelectorAll('#playes .player:first-child')