// Variables for the game

// Execute the Enchant library
enchant();

// Load the game state before start
window.onload = function() {
	var game = new Core(320, 320);
	game.fps = 32;
	game.preload();
	
// Load the game state as played
	game.onload = function() {
		var bg = new Sprite(320, 320);
		var map = game.assets[];
		var image = new Surface(320, 320);
// Draw up the map		
		for (var 