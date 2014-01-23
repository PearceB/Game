// Variables for the game

// Execute the Enchant library
enchant();

// Load the game state before start
window.onload = function() {
	var game = new Core(320, 320);
	game.fps = 32;
	game.preload('http://img153.imageshack.us/img153/442/previewpg6.jpg',
				  'http://enchantjs.com/assets/images/map0.gif');
	
// Load the game state as played
	game.onload = function() {
	// Draw up the map
		var bg = new Sprite(320, 320);
		var map = game.assets['http://enchantjs.com/assets/images/map0.gif'];
		var image = new Surface(320, 320);
		for (var i = 0; i < 320; i+=