var contextWidth = 400,
    contextHeight = 600;
var ctx;

function init() {
  ctx = document.getElementById('game').getContext('2d');
  ctx.rect(0, 0, contextWidth, contextHeight);

  window.requestAnimationFrame(draw);
}

var alien = new Alien(50, 50);

function draw() {
  ctx.fillStyle = 'black';
  ctx.fill();

  alien.draw();
}
