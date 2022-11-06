function createGame(player1, hour, player2){
  return `
     <li>
        <img src="./assests/icon-${player1}.svg" alt="Bandeira da ${player1}">
        <strong>${hour}</strong>
        <img src="./assests/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games){
  delay = delay + 0.4;
  return `
    <div class="card" style = "animation-delay:${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
         ${games}
      </ul>
    </div>
  `
}


document.querySelector("#cards").innerHTML = 
   createCard("21/11", "segunda", 
      createGame("brazil", "8:00", "cameroon") + 
      createGame("hungary", "13:00", "argentina") + createGame("colombia", "20:00", "japan")) +

   createCard("24/11","quinta",
      createGame("britishColumbia", "8:00", "cameroon")+ createGame("india", "13:00", "armenia") + 
      createGame("comoros", "20:00", "jordan"))+

   createCard("24/11","quinta",
      createGame("switzerland", "7:00", "cameroon") + createGame("portugal", "13:00", "ghana") + 
      createGame("brazil", "20:00", "serbia"))  +

   createCard("28/11","segunda",
      createGame("southKorea", "16:00", "ghana") +
      createGame("brazil", "13:00", "switzerland") + createGame("portugal", "20:00", "uruguay"))