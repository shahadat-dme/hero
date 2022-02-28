const playerCardParent = document.getElementById('player-cards');
const detailsCardParent = document.getElementById('details-card');
const spinner = document.getElementById('spinner');
const errorMessage = document.getElementById('error-message');
const spinnerTimeout = document.getElementById('spinner-timeout-message');
spinner.style.display = 'none';
errorMessage.style.display = 'none';
spinnerTimeout.style.display = 'none';
const loadPlayersByName = () => {
    errorMessage.style.display = 'none';
    spinnerTimeout.style.display = 'none';
    spinner.style.display = 'block';
    const searchBox = document.getElementById('search-box');
    if (!isNaN(searchBox.value)) {
        clearPreviousResult(searchBox);
        errorMessage.style.display = 'block';
        spinner.style.display = 'none';
    } else {
        const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchBox.value}`;
        clearPreviousResult(searchBox);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.player != null) {
                    displayPlayersByName(data.player);
                } else {
                    setTimeout(spinnerTimeoutMessage, 5000);
                }
            });
    }
}

const spinnerTimeoutMessage = () => {
    spinner.style.display = 'none';
    spinnerTimeout.style.display = 'block';
}

const clearPreviousResult = searchBox => {
    searchBox.value = "";
    playerCardParent.textContent = "";
    detailsCardParent.textContent = "";
}

const displayPlayersByName = players => {
    players.forEach(player => {
        const div = document.createElement('div');
        div.classList.add('p-2', 'flex-fill', 'bd-highlight');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${player.strThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">"${player.strPlayer}"</h5>
                <p class="card-text">
                ${player.strBirthLocation}
                </p>
                <a class="btn btn-danger delete-btn">
                Delete
                </a>
                <a href="#" class="btn btn-primary" onclick="loadPlayerDetails(${player.idPlayer})">
                Details
                </a>
            </div>
        </div>
        `;
        playerCardParent.appendChild(div);
    });
    spinner.style.display = 'none';
    const deleteButtons = document.getElementsByClassName('delete-btn');
    for (const deleteButton of deleteButtons) {
        deleteButton.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.display = 'none';
        });
    }
}

const loadPlayerDetails = playerID => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerID}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayPlayerDetails(data.players[0]));
}

const displayPlayerDetails = player => {
    detailsCardParent.textContent = "";
    const dir = player.strGender == "Male" ? 'gent' : 'lady';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card w-25 img-fluid">
        <img src="./images/${dir}.jpg" alt="">
    </div>
    <div class="card">
        <img src="${player.strRender}" class="card-img-top w-50 mx-auto" alt="...">
        <div class="card-body">
            <h2> Name : ${player.strPlayer} </h2>
            <p><span>Country :</span> ${player.strNationality} </p>
            <h4>Gender : ${player.strGender}</h4>
            <p class="card-text">
                ${player.strDescriptionEN.slice(0, 300)}
            </p>
        </div>
    </div>
    `;
    detailsCardParent.appendChild(div);
}