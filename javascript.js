// GET computer choice
function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

//string to number converter
function stringToNum(string) {
  switch (string) {
    case "rock":
      return 1;
      break;
    case "paper":
      return 2;
      break;
    case "scissor":
      return 3;
      break;
    default:
      return 100;
      break;
  }
}

//number to string converter
function numToString(num) {
  switch (num) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissor";
      break;
  }
}

//finding the greater number
function getGreater(a, b) {
  return a > b ? true : false;
}

//one round
function playRound(e) {
  roundCounter++;
  body.appendChild(result);
  body.appendChild(roundContainer);
  body.appendChild(humanScoreContainer);
  body.appendChild(computerScoreContainer);
  let humanChoice = stringToNum(e.target.textContent.toLowerCase());
  let computerChoice = getComputerChoice();
  let winner;
  //rock = 1
  //paper = 2
  //scissors = 3;
  //three cases: rock and paper(3), paper and scissors(5), rock and scissors(4)
  if (humanChoice === computerChoice) {
    result.textContent = 'Its a Draw!';
    displayScore();
    return;
  }
  
  switch (humanChoice + computerChoice) {
    case 3:
    case 5: //pass the choices to a greatness checker
      winner = getGreater(humanChoice, computerChoice);
      break;

    case 4: //put a negation to 4 when the boolean is returned
      winner = !getGreater(humanChoice, computerChoice);
      break;
  }
  //  Compute winner
  if (winner) {
    humanScore++;
    result.textContent = `You win! ${numToString(humanChoice)} beats ${numToString(computerChoice)}!`;
  } else {
    computerScore++;
    result.textContent = `You lose! ${numToString(computerChoice)} beats ${numToString(humanChoice)}!`;
  }
  displayScore();
}

function displayScore(){
  roundContainer.textContent = `round: ${roundCounter}`;
  humanScoreContainer.textContent = `Your score = ${humanScore}`;
  computerScoreContainer.textContent = `Computer score = ${computerScore}`;
  if(humanScore === 5 || computerScore === 5){
    displayWinner();
  }
}
function displayWinner(){
  if(humanScore === 5){
    winnerContainer.textContent = "YOU WIN THE GAME!" ;
  }else{
    winnerContainer.textContent = "YOU LOSE THE GAME";
  }
  body.appendChild(winnerContainer);
  body.removeChild(result);
  rock.disabled = true;
  paper.disabled = true;
  scissor.disabled = true;
}



//result display setup
const body = document.querySelector("body");
const result = document.createElement("div");
const humanScoreContainer = document.createElement("div");
const computerScoreContainer = document.createElement("div");
const winnerContainer = document.createElement("div");
const roundContainer = document.createElement('div');




//event listeners
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissor.addEventListener("click", playRound);



//score variables
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

//notes
/*
    convert humanChoice to the corresponding number
    Problem: Deciding the winner-so i need to compare the humanchoice to the computer choice and calculate who the winner is 
    input: corresponding numbers
    three possible situations: draw, win and lose
    draw condition is if the choices are equal, that leaves us to other numbers to work with 
    CHECK for equal choice
    CHECK if humanChoice = 1
      if computerCHoice = 2, computer wins
      else human wins
    CHECK if humanChoice is 2
      if computerChoice = 3, computer wins
      else human wins
    CHECK if humanChoice is 3
      if computerChoice = 1, computer wins
      else human wins
  */
/*
  learnings:
    -append from bottom up, children first and then parent in the order of code
    -lets say theres a div, and you have appended a few nodes to it but if you then add a text node to the parent div
     then the appended nodes wont get appended 
    -do not forget defer
*/