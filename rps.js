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
    return "Computer wins!"
  }

  if (computer === 'r' && human === 'p') {
    return "Human wins!"
  }

  if (computer === 'p' && human === 'r') {
    return "Computer wins!"
  }

  if (computer === 'p' && human === 's') {
    return "Human wins!"
  }

  if (computer === 's' && human === 'r') {
    return "Human wins!"
  }

  if (computer === 's' && human === 'p') {
    return "Computer wins!"
  }
}

function game(human) {
  let computer = computerPlay();
  whoWins(computer, human);
}


var human = window.prompt("You have found the hidden rock paper scissors! Which do you choose: r, p, or s?");

alert("You entered "+ human);

if ((human == 'r')||(human == 'p')||(human == 's')) {
  game(human);

} else {
  alert("Aaaa my feeble mind doesn't understand, please enter r, p, or s.")
}
