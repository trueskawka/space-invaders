var alienColour = 'rgb(255, 0, 255)';

class Alien {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
  }

  draw() {
    ctx.fillStyle = alienColour;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
