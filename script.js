const btns = document.querySelectorAll(".btn");
const box = document.querySelector(".para");
const shuffle = document.getElementById("pc-choice");
const hud = document.getElementById("log");

let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let timesRun = 0;
let playerCurrentChoice = "";
let computerCurrentChoice = "";


let mainEvent = btns.forEach(btn => {
  btn.addEventListener('click', () => {
    hud.style.setProperty("display", "block");
    playerCurrentChoice = btn.textContent;
    playRound(btn.textContent, getComputerChoice());
    reset();
    btns.forEach(btn => {
      btn.disabled = true;
      btn.style.pointerEvents = "none";
    });
    setTimeout(function() {
      btns.forEach(btn => {
        btn.style.pointerEvents = "auto";
        btn.removeAttribute('disabled');
      });
    }, 1100)
    setTimeout(function() {
      hud.style.setProperty("display", "none");
    }, 3100)
  });
  btn.addEventListener('click', () => {
    let myVar = setInterval(getComputerChoice, 70);
    setTimeout(function() {
      clearInterval(myVar);
    }, 1000);
  });
});


function getComputerChoice() {
  //Options computer can "pick"
  let options = ["rock", "paper", "scissors"];
  
  //Randomly generate and index from 0 to 2 
  let randNum = Math.floor(Math.random()*3);
  
  //Return a random element from options array 
  //utilizing random number from randNum 
  shuffle.textContent = options[randNum];
  computerCurrentChoice = options[randNum];
  return options[randNum];
}

function playRound(playerSelection, computerSelection) {  
  //Main logic to get the message who wins the round
  //and return value to later determine who increments the score
  if (playerSelection === computerSelection) {
    rounds++;
    document.getElementById("round").innerHTML = "Round:  " + rounds;
    document.getElementById("score-player").innerHTML = "Player:  " + playerScore;
    document.getElementById("score-pc").innerHTML = "Computer:  " + computerScore;
  } else if (
    (playerSelection === 'paper' && computerSelection === 'scissors') || 
    (playerSelection === 'rock'  && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'rock') ) {
      rounds++;
      computerScore++;
      document.getElementById("round").innerHTML = "Round:  " + rounds;
      document.getElementById("score-player").innerHTML = "Player:  " + playerScore;
      document.getElementById("score-pc").innerHTML = "Computer:  " + computerScore;
  } else {
      rounds++;
      playerScore++;
      document.getElementById("round").innerHTML = "Round:  " + rounds;
      document.getElementById("score-player").innerHTML = "Player:  " + playerScore;
      document.getElementById("score-pc").innerHTML = "Computer:  " + computerScore;
    }
  let roundLog = document.createElement("div"); 
  let logMessage = `player => ${playerCurrentChoice.toUpperCase()} vs ${computerCurrentChoice.toUpperCase()} <= computer || ${playerScore} : ${computerScore}`;  
  roundLog.textContent = logMessage;
  hud.appendChild(roundLog);
}

function reset() {
  //Final message to get to know who won the game
  if(rounds === 10) {
    if(playerScore === computerScore) {
    } else if(playerScore > computerScore) {
    } else {
    }
    rounds = 0;
    playerScore = 0;
    computerScore = 0;
    document.getElementById("round").innerHTML = "Round:  " + rounds;
    document.getElementById("score-player").innerHTML = "Player:  " + playerScore;
    document.getElementById("score-pc").innerHTML = "Computer:  " + computerScore;
  }
}
