function getComputerChoice(){
  let randomNumber = Math.floor(Math.random() * 3);
  let arrayOfOptions = ["rock", "paper", "scissors"];
  return arrayOfOptions[randomNumber];
}

let computerScore = 0;
let playerScore = 0;
let keepPlaying = true;

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => btn.addEventListener("click", function(){
  const results = document.querySelector("#end-message-container");
  const userScore = document.querySelector("#user-score");
  const computerScoreText = document.querySelector("#computer-score");
  const userChoiceImage = document.querySelector("#user-choice-image");
  const computerChoiceImage = document.querySelector("#computer-choice-image");

  let computerChoiceVar = getComputerChoice();
  let userChoice = btn.value;
  let endMessage = document.createElement("p");
  endMessage.id = "end-message";
  
  if(keepPlaying){
    if((userChoice === "rock" && computerChoiceVar === "scissors" ) ||(userChoice === "paper" && computerChoiceVar === "rock") || 
    (userChoice === "scissors" && computerChoiceVar === "paper")){
      playerScore += 1;
    } else if(
      (computerChoiceVar === "rock" && userChoice === "scissors" ) ||
    (computerChoiceVar === "paper" && userChoice === "rock") || 
    (computerChoiceVar === "scissors" && userChoice === "paper")){
      computerScore += 1;
    } else {}

    if(btn.value === "rock"){
      userChoiceImage.src = "images/rockImg.png";
    } else if(btn.value === "paper"){
      userChoiceImage.src = "images/paperImg.png";
    } else {
      userChoiceImage.src = "images/scissorsImg.png";
    }
  
    if(computerChoiceVar === "rock"){
      computerChoiceImage.src = "images/rockImg.png";
    } else if(computerChoiceVar === "paper"){
      computerChoiceImage.src = "images/paperImg.png";
    } else {
      computerChoiceImage.src = "images/scissorsImg.png";
    }
  

    if(playerScore === 5){
      endMessage.textContent = "Congrats you won!";
      results.appendChild(endMessage);
      keepPlaying = false;
    } else if(computerScore === 5){
      endMessage.textContent = "Oh no, you lost to the computer :(";
      results.appendChild(endMessage);
      keepPlaying = false;
    }
    userScore.textContent = `User Score: ${playerScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
  }
}));

