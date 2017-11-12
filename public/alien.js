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
    ctx.drawImage(sprites,
      this.alien.x, this.alien.y, this.alien.width, this.alien.height,
      this.x, this.y, this.width, this.height);
  }
}
