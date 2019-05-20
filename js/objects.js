/*
Create game objects (player and enemy) from this Constructor.
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

  /*
  Checks to make sure a game object (player or enemy) is
  in bounds.
  */
  update(dt) {
    this.offScreenX = this.x > 5;
    this.offScreenY = this.y < 1;
  }

  /*
  Draw the object so that it appears on the screen.
  Rather than count by pixels, we will set the X and Y values
  so that we can move the player and enemy block by block.
  */
  render() {
    ctx.drawImage(
      Resources.get(this.sprite),
      this.x * this.spriteOffsetX,
      this.y * this.spriteOffsetY
    );
  }

  /*
  Check to see if player and enemy occupy the same space.
  If they do, then this counts as a collision and game play starts over.
  */
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
    this.win = false;
  }

  /*
  If the player reaches the water and is not moving and
  has not already won then show the modal that the player has
  won the game.
  */
  update() {
    super.update();
    if (this.offScreenY && !this.moving && !this.win) {
      $('#game-modal').modal('show');
      this.win = true;
    }
  }

  render() {
    super.render();
    this.moving = false;
  }

  /*
  Accepts input from the keyboard. Player cannot move outside the
  set boundaries of the gameboard. For example, if the player is
  greater than zero, then pressing the left arrow key once will
  move the player one block to the left.
  */
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
    this.moving = true;
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

  /*
  Calling this update function with delta time will allow for
  smooth animation of the enemy bugs as they pass along the screen.
  I added a Math.random function to vary the bug speeds a bit.
  */
  update(dt) {
    super.update();
    this.offScreenX ? (this.x = -1) : (this.x += Math.random(dt) / 8);
  }
}
