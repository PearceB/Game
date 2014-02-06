// Variables for the game
var LEFT = 0;
var RIGHT = 1;

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
		var maptip = game.assets['http://enchantjs.com/assets/images/map0.gif'];
		var image = new Surface(320, 320);
		
		for (var j = 0; j < 320; j += 16) {
			for (var i = 0; i < 320; i += 16) {
				image.draw(maptip, 16, 0, 16, 16, i, j, 16, 16);
			}
		}
		
		bg.image = image;
		game.rootScene.addChild(bg);
		
		var paddle = new Sprite(24, 24);
		paddle.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
		paddle.x = 160 - 16;
		paddle.y = 160 - 16;
		paddle.frame = 11;
		
		paddle.toX = paddle.x;
		paddle.dir = RIGHT;
		
		game.rootScene.addChild(paddle);
	
	bg.addEventListener(Event.TOUCH_START, function(e) {
		paddle.toX = e.x - 16;
		});
	};
	game.start();
};