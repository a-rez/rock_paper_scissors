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
    return "Computer played r! Computer wins!"
  }

  if (computer === 'r' && human === 'p') {
    return "Computer played r! Human wins!"
  }

  if (computer === 'p' && human === 'r') {
    return "Computer played p! Computer wins!"
  }

  if (computer === 'p' && human === 's') {
    return "Computer played p! Human wins!"
  }

  if (computer === 's' && human === 'r') {
    return "Computer played s! Human wins!"
  }

  if (computer === 's' && human === 'p') {
    return "Computer played s! Computer wins!"
  }
}

function game() {
  for (let i = 0; i <= 4; i++) {

    var human = window.prompt("You have found the hidden rock paper scissors! Which do you choose: r, p, or s?");
    if ((human == 'r')||(human == 'p')||(human == 's')) {


          let computer = computerPlay();

          alert(whoWins(computer, human));
          var continue2 = "y";
          continue2 = window.prompt("Enter y to play again!");

          if (continue2 !== "y") {
      break;
    }

  } else {
    alert("Aaaa my feeble mind doesn't understand, please enter r, p, or s.")
  }

 }
}


// alert("You entered "+ human);

  game();
