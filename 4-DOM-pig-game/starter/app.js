/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

// event listenner for the "roll dice" button with anonymous function
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    // 1. Random number of the dice
    var dice = Math.floor(Math.random()*6) + 1;

    // 2. Display result
    var diceDOM = document.querySelector(".dice");
    // show the dice
    diceDOM.style.display= "block";
    // changing the image displayed
    diceDOM.src = "dice-" + dice + ".png"

    // 3. Update the round score if the rolled number is NOT a 1
    if (dice != 1) {
      // TODO: Add score
      roundScore += dice;
      document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
      // TODO: Next Player
      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function(){
  if (gamePlaying) {
    // TODO : add current score to global one
    scores[activePlayer] += roundScore;
    // update global score on the html
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    // check if player reaches 100 points and wins;
    if (scores[activePlayer] >= 100) {
      // Change the "player-x" title to "Winner!"
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      // hide the dice
      document.querySelector(".dice").style.display= "none";
      // add the winner class
      document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
      document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
      gamePlaying = false;
    } else {
      // if the score is less than 100, change to another player
      nextPlayer();
    }
  }
});


// function to change player:
function nextPlayer(){
  // remove the active player class from the current player
  document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");

  // the roundScore variable is set to 0
  roundScore = 0;
  // put the current score of the player that was playing to 0.
  document.querySelector("#current-" + activePlayer).textContent = roundScore;
  // Change the active player to the other player
  activePlayer === 0 ?  activePlayer = 1: activePlayer = 0;
  // toggle the "active" class
  document.querySelector(".player-" + activePlayer + "-panel").classList.add("active");
  // hide the dice
  document.querySelector(".dice").style.display= "none";
};


document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  // hide the image of the dice
  document.querySelector(".dice").style.display= "none";

  // changing every score to 0
  document.getElementById("score-0").textContent= "0";
  document.getElementById("score-1").textContent= "0";
  document.getElementById("current-0").textContent= "0";
  document.getElementById("current-1").textContent= "0";

  // Changing textcontent to player 1 and 2
  document.getElementById("name-0").textContent = "Player 1"
  document.getElementById("name-1").textContent = "Player 2"

  // Removing class "winner" "to player 1 and 2.
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  // Removing class "active" "to player 1 and 2.
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  // Adding class "active" "to player 1.
  document.querySelector(".player-0-panel").classList.add("active");
}






// JS EXAMPLES OF DOM MANIPULATION

// SETTER:
// document.querySelector("#current-" + activePlayer).textContent = dice;
// document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

// GETTER:
// var x = document.querySelector("#score-0").textContent;
// console.log(x);

// CHANGE CSS:
// document.querySelector(".dice").style.display= "none";
