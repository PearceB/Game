// Variables for the game
var LEFT = 0;
var RIGHT = 1;
var UP = 2;
var DOWN = 3;

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
		
		var paddle = new Sprite(32, 32);
		paddle.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
		paddle.x = 160 - 16;
		paddle.y = 160 - 16;
		paddle.frame = 3645;
		
		paddle.toX = paddle.x;
		paddle.toY = paddle.y;
		paddle.dir = DOWN;
		paddle.anim = [3645];
		
		game.rootScene.addChild(paddle);
		
		paddle.addEventListener(Event.ENTER_FRAME, function() {
            if (paddle.y > paddle.toY) {
                paddle.dir = UP;
                if (Math.abs(paddle.y - paddle.toY) < 3) {
                    paddle.y = paddle.toY;
                } else {
                    paddle.y -= 3;
                }
            } else if (paddle.y < paddle.toY) {
                paddle.dir = DOWN;
                if (Math.abs(paddle.y - paddle.toY) < 3) {
                    paddle.y = paddle.toY;
                } else {
                    paddle.y += 3;
                }
            }
            if (paddle.x > paddle.toX) {
                paddle.dir = LEFT;
                if (Math.abs(paddle.x - paddle.toX) < 3) {
                    paddle.x = paddle.toX;
                } else {
                    paddle.x -= 3;
                }
            } else if (paddle.x < paddle.toX) {
                paddle.dir = RIGHT;
                if (Math.abs(paddle.x - paddle.toX) < 3) {
                    paddle.x = paddle.toX;
                } else {
                    paddle.x += 3;
                }
            }
            
            if (paddle.x == paddle.toX && paddle.y == paddle.toY)
                paddle.age = 1;
            paddle.frame = paddle.anim[paddle.dir *4 + (paddle.age % 4)];
        });
	
		bg.addEventListener(Event.TOUCH_START, function(e) {
			paddle.toX = e.x - 16;
			paddle.toY = e.y - 16;
		});
			
		bg.addEventListener(Event.TOUCH_MOVE, function(e) {
			paddle.toX = e.x - 16;
			paddle.toY = e.y - 16;
		});
	};
	game.start();
};