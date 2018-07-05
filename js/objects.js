/*
Create game objects from this Constructor.
*/
class GameObjects {
  constructor() {
    this.sprite = 'images/';
    this.x = 2;
    this.y = 5;
  }
}

// Create Player from GameObjects
class Player extends GameObjects {
  super();
  this.sprite += 'char-boy.png';
}

// create Enemy from GameObjects
class Enemy extends GameObjects {
  constructor() {
    super();
    this.sprite += 'enemy-bug.png';
  }
}
