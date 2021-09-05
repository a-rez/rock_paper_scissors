let human2;
let humanScore = 0;
let computerScore = 0;

let physicalButtons = document.getElementsByClassName("buttons");
console.log(physicalButtons[0].style);

for (let i=0;i < Array.from(physicalButtons).length; i++) {
  console.log(physicalButtons[i].style.visibility = "hidden");
}

// document.getElementById("reset").style.visibility = "hidden";

function computerPlay() {
  let index4 = Math.floor(Math.random() * 3);
  let options = "rps";
  return options[index4];
}

function whoWins(computer, human) {
  if (computer === human) {
    return "It's a tie! Дружба wins!"
  }

  if (computer === 'r' && human === 's') {
    computerScore++;
    return "Computer played r! Computer wins!"
  }

  if (computer === 'r' && human === 'p') {
    humanScore++;
    return "Computer played r! You win!"
  }

  if (computer === 'p' && human === 'r') {
    computerScore++;
    return "Computer played p! Computer wins!"
  }

  if (computer === 'p' && human === 's') {
    humanScore++;
    return "Computer played p! You win!"
  }

  if (computer === 's' && human === 'r') {
    humanScore++;
    return "Computer played s! You win!"
  }

  if (computer === 's' && human === 'p') {
    computerScore++;
    return "Computer played s! Computer wins!"
  }
}


let human;

function rock() {
  console.log("you rock");
  human = 'r';
}

function paper() {
  console.log("you paper");
  human = 'p';
}

function scissors() {
  console.log("you scissor");
  human = 's';
}


function displayWinner() {
  if (human) {
    if ((human == 'r')||(human == 'p')||(human == 's')) {

      let computer = computerPlay();
      document.getElementById("p2").innerHTML = whoWins(computer, human);
      document.getElementById("computerScoreboard").innerHTML = `Computer's score: ${computerScore}`;
      document.getElementById("humanScoreboard").innerHTML = `Your score: ${humanScore}`;
  }
 }
}

function game() {
    document.getElementById("mainbutton").innerText = "Reset";
    document.getElementById("computerScoreboard").innerHTML = `Computer's score: 0`;
    document.getElementById("humanScoreboard").innerHTML = `Your score: 0`;

    for (let i=0;i < Array.from(physicalButtons).length; i++) {
      console.log(physicalButtons[i].style.visibility = "visible");
    }
    document.getElementById("p2").innerHTML = "To start, choose a fighter";
    
    
    const buttons = Array.from(document.getElementsByClassName('buttons'));
    console.log(buttons);
    buttons.forEach(button => button.addEventListener('click', displayWinner));
    console.log(computerScore);

    // for (let i=0;i < Array.from(physicalButtons).length; i++) {
    //  console.log(physicalButtons[i].style.visibility = "hidden");
    // }

    // document.getElementById("reset").style.visibility = "visible";

    
}

