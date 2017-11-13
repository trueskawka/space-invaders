class Alien {
  constructor(x, y, alien) {
    this.x = x;
    this.y = y;
    this.width = alien.width;
    this.height = alien.height;
    this.alien = alien;
    this.hit = false;
  }

  draw() {
    if (this.hit) return;
    if (currentFrame < frames / 2) {
      ctx.drawImage(sprites,
        this.alien.x, this.alien.y, this.alien.width, this.alien.height,
        this.x, this.y, this.width, this.height);
    } else {
      ctx.drawImage(sprites,
        this.alien.x2, this.alien.y2, this.alien.width, this.alien.height,
        this.x, this.y, this.width, this.height);
    }
  }
}
