const players = ["X", "O"];
let currentPlayer;
let winner = null;

const initializePlayers = () => {
  const random = Math.random();
  if (random < 0.5) {
    currentPlayer = players[0];
  }
  else {
    currentPlayer = players[1];
  }
};
  
function mousePressed() {
  if (ongoingGame.state === "started") {
    console.log("----- Beginning of the turn -----");

    console.log("The human player is currently playing: ", currentPlayer);

    board.forEach(function(line) {
      line.forEach(function(spot) {
        if (spot.state === "free") {
          spot.clicked(mouseX, mouseY);
        };
      });
    });

    ongoingGame.subtractSpot();
    updateGrid();
    let spotsLeft = ongoingGame.spotsLeft;
    checkWinner(spotsLeft);

    if ((ongoingGame.winner === null) && (ongoingGame.difficulty === "easy")) {
      console.log("The bot player is currently playing: ", currentPlayer);
      botTurnRandom();
      ongoingGame.subtractSpot();
      updateGrid();
      spotsLeft = ongoingGame.spotsLeft;
      checkWinner(spotsLeft);
    };

    console.log("----- End of the turn -----");
    spotsLeft = ongoingGame.spotsLeft;
    console.log("Spots left: ",  spotsLeft);
  };
};

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const checkWinner = (spotsLeft) => {
  function matchingCombination(a, b, c) {
    return a === b && b === c && a != "free";
  };

  // Horizontal
  if (matchingCombination(board[0][0].state, board[0][1].state, board[0][2].state)) {
    winner = board[0][0].state;
    push();
      strokeWeight(4);
      line(10, 50, 290, 50);
    pop();
  };
  if (matchingCombination(board[1][0].state, board[1][1].state, board[1][2].state)) {
    winner = board[1][0].state;
    push();
      strokeWeight(4);
      line(10, 150, 290, 150);
    pop();
  };
  if (matchingCombination(board[2][0].state, board[2][1].state, board[2][2].state)) {
    winner = board[2][0].state;
    push();
      strokeWeight(4);
      line(10, 250, 290, 250);
    pop();
  };

  // Vertical
  if (matchingCombination(board[0][0].state, board[1][0].state, board[2][0].state)) {
    winner = board[0][0].state;
    push();
      strokeWeight(4);
      line(50, 10, 50, 290);
    pop();
  };
  if (matchingCombination(board[0][1].state, board[1][1].state, board[2][1].state)) {
    winner = board[0][1].state;
    push();
      strokeWeight(4);
      line(150, 10, 150, 290);
    pop();
  };
  if (matchingCombination(board[0][2].state, board[1][2].state, board[2][2].state)) {
    winner = board[0][2].state;
    push();
      strokeWeight(4);
      line(250, 10, 250, 290);
    pop();
  };

  // Diagonal
  if (matchingCombination(board[0][0].state, board[1][1].state, board[2][2].state)) {
    winner = board[0][0].state;
    push();
      strokeWeight(4);
      line(10, 10, 290, 290);
    pop();
  }
  if (matchingCombination(board[2][0].state, board[1][1].state, board[0][2].state)) {
    winner = board[2][0].state;
    push();
      strokeWeight(4);
      line(10, 290, 290, 10);
    pop();
  };

  // Tie
  if ((winner === null) && (spotsLeft === 0)) {
    winner = "Tie";
  };
  
  if (winner != null) {
    ongoingGame.gameEnd(winner);
    noLoop();
  };
};

const updateGrid = () => {

  if (board[0][0].state == "filled" && currentPlayer == "X") {
    board[0][0].state = "X";
    push();
      strokeWeight(3);
      stroke("blue");
      line(15, 15, 85, 85);
      line(85, 15, 15, 85);
    pop();
    currentPlayer = "O";
  }

  else if (board[0][0].state == "filled" && currentPlayer == "O") {
    board[0][0].state = "O";
    push();
      strokeWeight(3);
      stroke("red");
      ellipse(50, 50, 75, 75);
    pop();
    currentPlayer = "X";
  }

  else if (board[0][1].state == "filled" && currentPlayer == "X") {
    board[0][1].state = "X";
    push();
      strokeWeight(3);
      stroke("blue");
      line(115, 15, 185, 85);
      line(185, 15, 115, 85);
    pop();
    currentPlayer = "O";
  }

  else if (board[0][1].state == "filled" && currentPlayer == "O") {
    board[0][1].state = "O";
    push();
      strokeWeight(3);
      stroke("red");
      ellipse(150, 50, 75, 75);
    pop();
    currentPlayer = "X";
  }

  else if (board[0][2].state == "filled" && currentPlayer == "X") {
    board[0][2].state = "X";
    push();
      strokeWeight(3);
      stroke("blue");
      line(215, 15, 285, 85);
      line(285, 15, 215, 85);
    pop();
    currentPlayer = "O";
  }

  else if (board[0][2].state == "filled" && currentPlayer == "O") {
    board[0][2].state = "O";
    push();
      strokeWeight(3);
      stroke("red");
      ellipse(250, 50, 75, 75);
    pop();
    currentPlayer = "X";
  }

  else if (board[1][0].state == "filled" && currentPlayer == "X") {
    board[1][0].state = "X";
    push();
      strokeWeight(3);
      stroke("blue");
      line(15, 115, 85, 185);
      line(85, 115, 15, 185);
    pop();
    currentPlayer = "O";
  }

  else if (board[1][0].state == "filled" && currentPlayer == "O") {
    board[1][0].state = "O";
    push();
      strokeWeight(3);
      stroke("red");
      ellipse(50, 150, 75, 75);
    pop();
    currentPlayer = "X";
  }

  else if (board[1][1].state == "filled" && currentPlayer == "X") {
    board[1][1].state = "X";
    push();
      strokeWeight(3);
      stroke("blue");
      line(115, 115, 185, 185);
      line(185, 115, 115, 185);
    pop();
    currentPlayer = "O";
  }

  else if (board[1][1].state == "filled" && currentPlayer == "O") {
    board[1][1].state = "O";
    push();
      strokeWeight(3);
      stroke("red");
      ellipse(150, 150, 75, 75);
    pop();
    currentPlayer = "X";
  }

  else if (board[1][2].state == "filled" && currentPlayer == "X") {
    board[1][2].state = "X";
    push();
      strokeWeight(3);
      stroke("blue");
      line(215, 115, 285, 185);
      line(285, 115, 215, 185);
    pop();
    currentPlayer = "O";
  }

  else if (board[1][2].state == "filled" && currentPlayer == "O") {
    board[1][2].state = "O";
    push();
      strokeWeight(3);
      stroke("red");
      ellipse(250, 150, 75, 75);
    pop();
    currentPlayer = "X";
  }

  else if (board[2][0].state == "filled" && currentPlayer == "X") {
    board[2][0].state = "X";
    push();
      strokeWeight(3);
      stroke("blue");
      line(15, 215, 85, 285);
      line(85, 215, 15, 285);
    pop();
    currentPlayer = "O";
  }

  else if (board[2][0].state == "filled" && currentPlayer == "O") {
    board[2][0].state = "O";
    push();
      strokeWeight(3);
      stroke("red");
      ellipse(50, 250, 75, 75);
    pop();
    currentPlayer = "X";
  }

  else if (board[2][1].state == "filled" && currentPlayer == "X") {
    board[2][1].state = "X";
    push();
      strokeWeight(3);
      stroke("blue");
      line(115, 215, 185, 285);
      line(185, 215, 115, 285);
    pop();
    currentPlayer = "O";
  }

  else if (board[2][1].state == "filled" && currentPlayer == "O") {
    board[2][1].state = "O";
    push();
      strokeWeight(3);
      stroke("red");
      ellipse(150, 250, 75, 75);
    pop();
    currentPlayer = "X";
  }

  else if (board[2][2].state == "filled" && currentPlayer == "X") {
    board[2][2].state = "X";
    push();
      strokeWeight(3);
      stroke("blue");
      line(215, 215, 285, 285);
      line(285, 215, 215, 285);
    pop();
    currentPlayer = "O";
  }

  else if (board[2][2].state == "filled" && currentPlayer == "O") {
    board[2][2].state = "O";
    push();
      strokeWeight(3);
      stroke("red");
      ellipse(250, 250, 75, 75);
    pop();
    currentPlayer = "X";
  }

}