var bullets = [],
    bulletColour = 'rgb(255, 255, 255)';

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 2;
    this.height = 5;
    this.v = 5;
  }

  moveY() {
    this.y -= this.v;
  }

  draw() {
    ctx.fillStyle = bulletColour;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
