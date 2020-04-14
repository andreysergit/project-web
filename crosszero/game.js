"use strict";

window.onload = function crossZero() {
  for (let i = 0; i < 9; i++) {
    document.getElementById("game").innerHTML += '<div class = "block"></div>';
  }

  let score = 0;

  game.addEventListener("click", function (event) {
    console.log(event);
    if (event.target.className == "block") {
      if (score % 2 === 0) {
        event.target.innerHTML = "X";
      } else {
        event.target.innerHTML = "O";
      }
      score++;
      checkWinner();
    }
  });
  function checkWinner() {
    let checkblock = document.getElementsByClassName("block");
    let arr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    for (let i = 0; i < arr.length; i++) {
      if (
        checkblock[arr[i][0]].innerHTML == "X" &&
        checkblock[arr[i][1]].innerHTML == "X" &&
        checkblock[arr[i][2]].innerHTML == "X"
      ) {
        alert("WIN CROSS");
      } else if (
        checkblock[arr[i][0]].innerHTML == "O" &&
        checkblock[arr[i][1]].innerHTML == "O" &&
        checkblock[arr[i][2]].innerHTML == "O"
      ) {
        alert("WIN ZERO");
      } else {
        let draw = true;
        for (let i in checkblock) {
          if (checkblock[i].innerHTML == "") draw = false;
        }
        if (draw) {
          alert("DRAW");
          break;
        }
      }
    }
  }
};
