var sprites = new Image();
sprites.src = "./sprites/spritesheet2.png";

class Sprite {
  constructor(x, y, x2, y2, width, height) {
    this.x = x;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;
    this.width = width;
    this.height = height;
  }
}

var alien_chub = new Sprite(0, 0, 32, 0, 22, 16);
var alien_tall = new Sprite(64, 0, 96, 0, 16, 16);
