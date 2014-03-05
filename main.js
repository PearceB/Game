// Variables for the game
var LEFT = 0;
var RIGHT = 1;

// Execute the Enchant library
enchant();

// Load the game state before start
window.onload = function() {
    var game = new Core(320, 320);
    game.fps = 64;
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

        // Add the Score
        game.score = 0;
        scoreLabel = new Label("Score: ");
        scoreLabel.x = 5;
        scoreLabel.color = "white";

        game.rootScene.addChild(scoreLabel);

        //Add the paddle
  		var paddle = new Sprite(65,10);
    	paddle.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
		paddle.x = 120;
		paddle.y = 300;
		paddle.frame = 217;

		paddle.toX = paddle.x;

		game.rootScene.addChild(paddle);

        // Add the ball
        var ball = new Sprite(10,10);
        ball.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        ball.x = 110;
        ball.y = 200;
        ball.dx = 1;
        ball.dy = 2.5;
        ball.speed = 1.1;
        ball.frame = 40;

        game.rootScene.addChild(ball);

        // Add each brick
        var coords = [{x:20,y:20}, {x:60,y:20}, {x:100,y:20}, {x:140,y:20}, {x:180,y:20}, {x:220,y:20}, {x:260,y:20},
                      {x:40,y:40}, {x:80,y:40}, {x:120,y:40}, {x:160,y:40}, {x:200,y:40}, {x:240,y:40},
                      {x:60,y:60}, {x:100,y:60}, {x:140,y:60}, {x:180,y:60}, {x:220,y:60},
                      {x:80,y:80}, {x:120,y:80}, {x:160,y:80}, {x:200,y:80},
                      {x:100,y:100}, {x:140,y:100}, {x:180,y:100},
                      {x:120,y:120}, {x:160,y:120},
                      {x:140,y:140}]

        var bricks = coords.map(function (coord) {
            var brick = new Sprite(30,15);
            brick.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
            brick.x = coord.x;
            brick.y = coord.y;
            brick.frame = 100;
            game.rootScene.addChild(brick);
            return brick;
        });

        // Setup the score
        scoreLabel.addEventListener(Event.ENTER_FRAME, function(){
            this.text = "Score: " + game.score;
        });

        // Controlling paddle movement
		paddle.addEventListener(Event.ENTER_FRAME, function() {
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
        });

        // Start the paddle movement
		bg.addEventListener(Event.TOUCH_START, function(e) {
			paddle.toX = e.x - 20;
		});

        // Move the paddle
		bg.addEventListener(Event.TOUCH_MOVE, function(e) {
			paddle.toX = e.x - 20;
		});

        // Moving the ball and detecting collision
        bg.addEventListener(Event.ENTER_FRAME, function() {
            ballMove();
            function ballMove() {
                ball.x = ball.x + ball.dx * ball.speed;
                ball.y = ball.y + ball.dy * ball.speed;
                if ((ball.x < 0) || (ball.x > (game.width - ball.width))) {
                    ball.dx = -ball.dx;
                }
                if ((ball.y < 0)) {
                    ball.dy = -ball.dy;
                }

                bricks.forEach(function(brick) {
                    if (ball.intersect(brick)) {
                        brick.x += 5000;
                        ball.dy = -ball.dy;
                        game.score = game.score + 10;
                    }
                });


                if (ball.intersect(paddle)) {
                    ball.dy = -ball.dy - Math.floor(Math.random() * 1.21);
                    if (ball.dx > 0) {
                        ball.dx = ball.dx + Math.floor(Math.random() * 1.21);
                    } else if (ball.dx < 0) {
                        ball.dx = ball.dx - Math.floor(Math.random() * 1.21);
                    }
                }
                if (ball.y > (game.height - ball.height)) {
                    ball.dy = 0;
                    ball.dx = 0;
                    game.stop();
                }
            }
        });
	};

    // Start the game
	game.start();
};
