var playerColour = 'rgb(0, 200, 0)',
    playerSpeed = 5;

class Player {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 10;
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
    ctx.fillStyle = playerColour;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

var player = new Player(190, 550);

window.addEventListener('keydown', this.control, false);
function control(e) {
  var code = e.keyCode;

  if (code == 37) {
    player.moveX(-1 * player.v);
    player.draw();
  } else if (code == 39) {
    player.moveX(1 * player.v);
    player.draw();
  } 
}
