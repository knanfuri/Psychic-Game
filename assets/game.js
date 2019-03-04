alert("Best Of 10 Try's");

var Letter = "Q";
// var counter = 1;

// var Letter = getRandomLetter;
// var getRandomLetter = ComputerPick[Math.floor(Math.random() * Letter.length)];
var player = prompt("Whats your guess?");

for (i = 0; i < 9; i++) {
  if (player === Letter) {
    alert("Win");
    player = prompt("Try Again");
  } else {
    alert("Loss");

    player = prompt("Try Again");
  }

  //   if (counter > 6) {
  //     document.write("Exceeded maximum Chances");
  //     break;
  //   }
}
