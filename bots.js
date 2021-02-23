const botTurnRandom = () => {
  let rand1 = null;
  let rand2 = null;

  while ((rand1 === null) || (rand2 === null) || (board[rand1][rand2].state != "free")) {
    rand1 = Math.floor(Math.random() * (board.length));
    rand2 = Math.floor(Math.random() * (board.length));
  }

  const randomSpot = board[rand1][rand2];

  randomSpot.clicked(randomSpot.x, randomSpot.y);
};

const botTurnAI = () => {

};