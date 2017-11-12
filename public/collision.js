function collisionCheck() {

  // Check if bullet in game
  bullets = bullets.filter(function(bullet) {
    return bullet.y - bullet.height > 0;
  });

  var alienWidth = 10;
  var alienHeight = 10;

  var removeBullets = [];

  // Check collision within swarm
  bullets.forEach(function(bullet, idx) {
    var xB = bullet.x - swarm.x;
    var yB = bullet.y - swarm.y;

    // If outside swarm - don't care!
    if (bullet.y > swarm.y + swarm.height
        || bullet.y < swarm.y
        || xB < 0
        || xB > swarm.width) {
      return;
    }

    // TODO: Check on bullets boundaries

    // Check if relative x position possible to hit
    var refXB = xB % (alienWidth + swarm.alienSpaceX);
    if (refXB > alienWidth) return; // Not interested

    var xPos = Math.floor(xB / (alienWidth + swarm.alienSpaceX));

    // Check if relative y position possible to hit
    var refYB = yB % (alienHeight + swarm.alienSpaceY);
    if (refYB > alienHeight) return; // Not interested
    var yPos = Math.floor(yB / (alienHeight + swarm.alienSpaceY));

    // Check if there is actually Alien there
    if (!swarm.aliens[yPos][xPos].hit) {
      swarm.aliens[yPos][xPos].hit = true;
      removeBullets.push(idx);
    }
  });

  // Removing hit bullets
  removeBullets.forEach(function(bulletIdx) {
    bullets.splice(bulletIdx, 1);
  });

}
