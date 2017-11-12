var contextWidth = 400,
    contextHeight = 600;
var ctx;

function init() {
  ctx = document.getElementById('game').getContext('2d');
  ctx.rect(0, 0, contextWidth, contextHeight);

  window.requestAnimationFrame(draw);
}

window.addEventListener('keydown', this.control, false);
function control(e) {
  var code = e.keyCode;

  if (code == 37) {
    player.moveX(-1 * player.v);
    player.draw();
  } else if (code == 39) {
    player.moveX(1 * player.v);
    player.draw();
  } else if (code == 32) {
    var bullet = new Bullet(player.x + player.width / 2, player.y);
    bullets.push(bullet);
  }
}

function draw() {
  ctx.fillStyle = 'black';
  ctx.fill();

  swarm.move();
  swarm.draw();

  player.draw();

  bullets.forEach(function(bullet){
    bullet.moveY();
    bullet.draw();
  });

  window.requestAnimationFrame(draw);
}
