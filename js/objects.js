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
    this.gameTile = 1;
  }

  update(dt) {
    this.offScreenX = this.x > 5;
    this.offScreenY = this.y < 1;
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x * this.spriteOffsetX, this.y * this.spriteOffsetY);
  }

  checkCollisions(playerOrEnemy) {
    if (this.y === playerOrEnemy.y) {
      if (this.x >= playerOrEnemy.x - 1 && this.x <= playerOrEnemy.x + 1) {
        return true;
      }
    } else {
      return false;
    }
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

  handleInput(input) {
    switch (input) {
      case 'left':
        this.x = this.x > 0 ? this.x - this.gameTile : this.x;
        break;
      case 'up':
        this.y = this.y > 0 ? this.y - this.gameTile : this.y;
        break;
      case 'right':
        this.x = this.x < 4 ? this.x + this.gameTile : this.x;
        break;
      case 'down':
        this.y = this.y < 5 ? this.y + this.gameTile : this.y;
        break;
      default:
        break;
    }
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
