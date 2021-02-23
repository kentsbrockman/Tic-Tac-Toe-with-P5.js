class Spot {
  constructor(name, x, y, size, state="free") {
    this.name = name;
    this.x = x;
    this.y = y;
    this.size = size;
    this.state = state;
  }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.size/2) {
      this.state = "filled";
    }
  }

  taken(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.size/2) {
      alert("This spot is already taken mate 😁");
    }
  }
}

const board = [
  [new Spot("top-left", 50, 50, 100),
  new Spot("top-center", 150, 50, 100),
  new Spot("top-right", 250, 50, 100)],
  [new Spot("middle-left", 50, 150, 100),
  new Spot("center", 150, 150, 100),
  new Spot("middle-right", 250, 150, 100)],
  [new Spot("bottom-left", 50, 250, 100),
  new Spot("bottom-center", 150, 250, 100),
  new Spot("bottom-left", 250, 250, 100)]
];

function setup() {
  const gameCanvas = createCanvas(300, 300);
  gameCanvas.parent("gamecanvas");
}

function draw() {
  if (ongoingGame.state === "started") {
    square(0,0,300);
    push();
      strokeWeight(2);
      line(0, 100, 300, 100);
      line(0, 200, 300, 200);
      line(100, 0, 100, 300);
      line(200, 0, 200, 300);
    pop();
    noLoop();
  };
};