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

/*

What is the DOM?
-The Document Object Model is a model of the elements from the html file. They can be called and 
-manipulated from the js file.

How do you target the nodes you want to work with?
-use document.getElementById, document.getElementsByClassName, etc

How do you create an element in the DOM?
-make it in html, or document.createElement

How do you add an element to the DOM?
-AppendChild

How do you remove an element from the DOM?
-removeChild

How can you alter an element in the DOM?
-using the dot operator and style or setAttribute
-getAttribute, removeAttribute, and setAttribute, etc

When adding text to a DOM element, should you use textContent or innerHTML? Why?
-Use textContent because innerHTML is insecure, like me. Hackers can change the entire thing to whatever 
-they want, as opposed to just the text

Where should you include your Javascript tag in your HTML file when working with DOM nodes?
- at the end

How do “events” and “listeners” work?
-listeners wait for events, such as a onlick, dblclick, etc, then execute whatever code is attached to them

What are three ways to use events in your code?
- attach functions directly in the html file
- set onevent property on the DOM object with element.onclick = () => function definition
- attach eventListeners to the nodes in js - is better because you can set mutliple eventListeners on one element and it's 
- cleanly seperated

Why are event listeners the preferred way to handle events?
- they time things well (explained in previous answer)

What are the benefits of using named functions in your listeners?
-You can use them in other places, keeps it cleaner

How do you attach listeners to groups of nodes?
-iterate over the nodeList and add a listener to each

What is the difference between the return values of querySelector and querySelectorAll?
-querySelector returns one element, querySelectorAll returns a list of nodes, which is different from an array of nodes.
-can be converted using Array.from(nodelist);

What does a “nodelist” contain?
A list of nodes and their children

*Explain the difference between “capture” and “bubbling”.
- watch js30 video
- capture is on the way down, bubbling is on the way down. once=true will destroy the eventListener after
- stopPropogration(event) will have the event listener only react in that one element instead of its relatives

*/