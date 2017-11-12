var boundaryRight = 351,
    boundaryLeft = 49;

class Swarm {
  constructor() {
    this.aliens = [];
    this.x = 50;
    this.y = 50;
    this.v = 0.1;
    this.direction = 1;
    this.nX = 10;
    this.nY = 5;
    this.alienSpaceX = 14;
    this.alienSpaceY = 10;
    this.width = (this.nX - 1) * this.alienSpaceX + 10 * this.nX;
    this.height = (this.nY - 1) * this.alienSpaceY + 10 * this.nY;
  }

  draw() {
    this.aliens.forEach(function(alienRow) {
      alienRow.forEach(function(alien){
        alien.draw();
      })
    });
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
    this.aliens.forEach(function(alienRow) {
      alienRow.forEach(function(alien) {
        alien.x += dx;
      });
    });
  }

  moveY(dy){
    this.y += dy;
    this.aliens.forEach(function(alienRow) {
      alienRow.forEach(function(alien) {
        alien.y += dy;
      });
    });
  }

  spawn() {
    for (var ny = 0; ny < this.nY; ny++) {
      var aliensRow = [];
      for (var nx = 0; nx < this.nX; nx++) {
        var x = this.x + nx * 10 + this.alienSpaceX * nx;
        var y = this.y + ny * 10 + this.alienSpaceY * ny;
        if (ny > 2) {
          var alien_sprite = alien_tall;
        } else {
          var alien_sprite = alien_chub;
        }
        var alien = new Alien(x, y, alien_sprite);
        aliensRow.push(alien);
      }
      this.aliens.push(aliensRow);
    }
  }
}

var swarm = new Swarm();
swarm.spawn();
