/*
Create game objects from this Constructor.
*/
class GameObjects {
  constructor() {
    this.sprite = 'images/';
    this.x = 2;
    this.y = 5;
    this.spriteOffsetX = 101;
    this.spriteOffsetY = 83;
  }

  update(dt) {
    this.offScreenX = this.x > 5;
    this.offScreenY = this.y < 1;
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x * this.spriteOffsetX, this.y * this.spriteOffsetY);
  }
}

/*
Create Player from GameObjects
*/
class Player extends GameObjects {
  constructor() {
    super();
    this.sprite += 'char-boy.png';
    this.moving = false;
  }

  render() {
    super.render();
  }
}

/*
Create Enemy from GameObjects
*/
class Enemy extends GameObjects {
  constructor(x, y) {
    super();
    this.sprite += 'enemy-bug.png';
    this.x = x;
    this.y = y;
  }

  update(dt) {
    super.update();
    this.offScreenX ? this.x = -1 : this.x += Math.random(dt)/8;
  }
}
