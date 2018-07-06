const player = new Player();
let allEnemies = [];

// instantiate new Enemy objects.
for (let i = 0; i < 3; i++)  {
  allEnemies.push(new Enemy(0,i+1));
};

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
