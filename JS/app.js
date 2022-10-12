function loadPlayers() {
    console.log("let's starts");
const url = `
https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Danny%20Welbeck
`
    fetch(url)
    .then(res => res.json())
    .then(players => displayPlayers(players.player[0]));
}

const playerContainer = document.querySelector('.players-container');
const displayPlayers = (players) =>{
console.log(players);
const playerDiv = document.createElement('div');
playerDiv.classList.add('player');
playerDiv.innerHTML=`
            <img src=${players.strThumb} width="100%" class="player-img" alt="">
            <h1 class="player-name">
                Player Name:${players.strPlayer}
            </h1>
            <h4 class="team-name">
                Team Name:${players.strTeam},
                Sports Field:${players.strSport}
            </h4>
            <p>${players.strDescriptionEN.slice(0,200)}</p>

`
playerContainer.appendChild(playerDiv);

} 