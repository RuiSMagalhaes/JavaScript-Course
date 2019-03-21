/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

// hide the image of the dice
document.querySelector(".dice").style.display= "none";

// changing every score to 0
document.getElementById("score-0").textContent= "0";
document.getElementById("score-1").textContent= "0";
document.getElementById("current-0").textContent= "0";
document.getElementById("current-1").textContent= "0";


// event listenner for the "roll dice" button with anonymous function
document.querySelector(".btn-roll").addEventListener("click", function() {

  // 1. Random number of the dice
  var dice = Math.floor(Math.random()*6) + 1;

  // 2. Display result
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display= "block";
  // changing the image displayed
  diceDOM.src = "dice-" + dice + ".png"

  // 3. Update the round score if the rolled number is NOT a 1
  if (dice != 1) {
    // Add score
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    // Next Player
    document.querySelector(".player-" + activePlayer + "-panel").classList.toggle("active");
    roundScore = 0;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
    activePlayer === 0 ?  activePlayer = 1: activePlayer = 0;
    document.querySelector(".player-" + activePlayer + "-panel").classList.toggle("active");
    document.querySelector(".dice").style.display= "none";
  }
});






// JS EXAMPLES OF DOM MANIPULATION

// SETTER:
// document.querySelector("#current-" + activePlayer).textContent = dice;
// document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

// GETTER:
// var x = document.querySelector("#score-0").textContent;
// console.log(x);

// CHANGE CSS:
// document.querySelector(".dice").style.display= "none";
