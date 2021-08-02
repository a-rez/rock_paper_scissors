function computerPlay() {
  let index4 = Math.floor(Math.random() * 3);
  let options = "rps";
  return options[index4];
}
var human = window.prompt("You have found the hidden rock paper scissors! Which do you choose: r, p, or s?")

if (human != 'r' || human != 'p' || human != 's') {
  alert("Aaa! Please enter r, p, or s");
}
