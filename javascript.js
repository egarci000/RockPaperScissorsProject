function getComputerChoice(){
  let randomNumber = Math.floor(Math.random() * 3);
  let arrayOfOptions = ["rock", "paper", "scissors"];
  return arrayOfOptions[randomNumber];
}

let computerScore = 0;
let playerScore = 0;
let roundsPlayed = 0;

function playGame(){
  let askPlayerChoice = prompt("What is your choice? ", "").toLowerCase();
  let getComputerChoiceVar = getComputerChoice();
  let wonMessage = `You have beat the computer in 5 rounds with a score of ${playerScore} while the computer had ${computerScore}`;
  

  function playRound(playerSelection, computerSelection){
    roundsPlayed += 1;
    if(playerSelection !== "rock" && 
    playerSelection !== "scissors" &&
    playerSelection !== "paper"){
      console.log("Please enter rock, paper, or scissors!");
    }
    if((playerSelection === "rock" && computerSelection === "scissors" ) ||(playerSelection === "paper" && computerSelection === "rock") || 
    (playerSelection === "scissors" && computerSelection === "paper")){
      playerScore += 1;
    } else if(
      (computerSelection === "rock" && playerSelection === "scissors" ) ||
    (computerSelection === "paper" && playerSelection === "rock") || 
    (computerSelection === "scissors" && playerSelection === "paper")){
      computerScore += 1;
    }
  }

  playRound(askPlayerChoice, getComputerChoiceVar);

  let roundMessage = `Round ${roundsPlayed}: User: ${askPlayerChoice}, Computer: ${getComputerChoiceVar}. User score: ${playerScore}, ${computerScore}`;
  console.log(roundMessage);

  if(roundsPlayed === 5){
    if(playerScore > computerScore){
      console.log(wonMessage);
    } else if(computerScore > playerScore){
      console.log(`You have lost :( The computer beat you with a score of ${computerScore} while you had ${playerScore}`);
    } else{
      console.log(`You have tied with the computer`);
    }
  }

}

for(let i = 0; i < 5; i++){
  playGame();
}


