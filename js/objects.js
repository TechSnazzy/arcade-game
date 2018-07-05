/*
Create game objects from this Constructor.
*/
class GameObjects {
  constructor() {
    this.sprite = 'images/';
    this.x = 2;
    this.y = 5;
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
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
}
