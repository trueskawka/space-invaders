var playerSpeed = 5;

class Player {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.width = player_sprite.width;
    this.height = player_sprite.height;
    this.v = playerSpeed;
  }

  moveX(dx) {
    if (this.x + dx + this.width >= boundaryRight
        || this.x + dx <= boundaryLeft) {
      return;
    }
    this.x += dx;
  }

  draw() {
    ctx.drawImage(sprites,
      player_sprite.x, player_sprite.y, player_sprite.width, player_sprite.height,
      this.x, this.y, this.width, this.height);
  }
}

var player = new Player(190, 550);
