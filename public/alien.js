var alienColour = 'rgb(255, 0, 255)';

class Alien {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.v = 0.5;
    this.direction = 1;
    this.width = 10;
    this.height = 10;
  }

  move() {
    var dx = this.v * this.direction;
    this.moveX(dx);
  }

  moveX(dx){
    if (this.x + dx + this.width >= boundaryRight
        || this.x + dx <= boundaryLeft) {
      this.direction *= -1;
      this.moveY(30);
    }
    this.x += dx;
  }

  moveY(dy){
    this.y += dy;
  }

  draw() {
    ctx.fillStyle = alienColour;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
