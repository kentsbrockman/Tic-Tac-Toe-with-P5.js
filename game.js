class Game {
  constructor(state = null, spotsLeft = 9, difficulty = null, winner = null) {
    this.state = state;
    this.spotsLeft = spotsLeft;
    this.difficulty = difficulty;
    this.winner = winner;
  }

  gameStart(chosenDifficulty) {
    this.state = "started";
    this.difficulty = chosenDifficulty;
  }

  subtractSpot() {
    this.spotsLeft -= 1;
  }

  gameEnd(winner) {
    this.state = "finished";
    this.winner = winner;
    const gameheader = document.getElementById("gameheader");
    if (winner === "Tie") {
      gameheader.getElementsByTagName("h2")[0].innerHTML = "That's a tie!";
    } else {
      gameheader.getElementsByTagName("h2")[0].innerHTML = `${winner} wins the game!`;
    }
    storeGameDetails();
    restartCTA();
  }
}

const ongoingGame = new Game();

const start = () => {
  const splashscreen = document.getElementById("splashscreen");
  splashscreen.style.display = "none";
  const gamedifficulty = document.getElementById("gamedifficulty");
  gamedifficulty.style.display = "block";
};

const easy = () => {
  const gamedifficulty = document.getElementById("gamedifficulty");
  gamedifficulty.style.display = "none";
  const gameheader = document.getElementById("gameheader");
  gameheader.getElementsByTagName("h2")[0].innerHTML += " - Easy";
  gameheader.style.display = "block";
  ongoingGame.gameStart("easy");
  initializePlayers();
};

const intermediate = () => {
  const gamedifficulty = document.getElementById("gamedifficulty");
  gamedifficulty.style.display = "none";
  const gameheader = document.getElementById("gameheader");
  gameheader.getElementsByTagName("h2")[0].innerHTML += " - Intermediate";
  gameheader.style.display = "block";
  ongoingGame.gameStart("intermediate");
  initializePlayers();
};

const godMode = () => {
  const gamedifficulty = document.getElementById("gamedifficulty");
  gamedifficulty.style.display = "none";
  const gameheader = document.getElementById("gameheader");
  gameheader.getElementsByTagName("h2")[0].innerHTML += " - Hard";
  gameheader.style.display = "block";
  ongoingGame.gameStart("hard");
  initializePlayers();
};

const storeGameDetails = () => {
};

const restartCTA = () => {
  const resetButton = document.createElement("a");
  resetButton.setAttribute("href", "#");
  resetButton.setAttribute("id", "resetButton");
  resetButton.innerHTML = ("Click here to start a new game!");
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", function(){
    document.location.reload();
  });
};