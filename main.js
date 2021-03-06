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
        var brick1 = new Sprite(30,15);
        brick1.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick1.x = 20;
        brick1.y = 20;
        brick1.frame = 100;
        
        game.rootScene.addChild(brick1);
        
        var brick2 = new Sprite(30,15);
        brick2.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick2.x = 60;
        brick2.y = 20;
        brick2.frame = 100;
        
        game.rootScene.addChild(brick2);
        
        var brick3 = new Sprite(30,15);
        brick3.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick3.x = 100;
        brick3.y = 20;
        brick3.frame = 100;
        
        game.rootScene.addChild(brick3);
        
        var brick4 = new Sprite(30,15);
        brick4.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick4.x = 140;
        brick4.y = 20;
        brick4.frame = 100;
        
        game.rootScene.addChild(brick4);
        
        var brick5 = new Sprite(30,15);
        brick5.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick5.x = 180;
        brick5.y = 20;
        brick5.frame = 100;
        
        game.rootScene.addChild(brick5);
        
        var brick6 = new Sprite(30,15);
        brick6.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick6.x = 220;
        brick6.y = 20;
        brick6.frame = 100;
        
        game.rootScene.addChild(brick6);
        
        var brick7 = new Sprite(30,15);
        brick7.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick7.x = 260;
        brick7.y = 20;
        brick7.frame = 100;
        
        game.rootScene.addChild(brick7);
        
        var brick8 = new Sprite(30,15);
        brick8.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick8.x = 40;
        brick8.y = 40;
        brick8.frame = 100;
        
        game.rootScene.addChild(brick8);
        
        var brick9 = new Sprite(30,15);
        brick9.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick9.x = 80;
        brick9.y = 40;
        brick9.frame = 100;
        
        game.rootScene.addChild(brick9);
        
        var brick10 = new Sprite(30,15);
        brick10.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick10.x = 120;
        brick10.y = 40;
        brick10.frame = 100;
        
        game.rootScene.addChild(brick10);
        
        var brick11 = new Sprite(30,15);
        brick11.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick11.x = 160;
        brick11.y = 40;
        brick11.frame = 100;
        
        game.rootScene.addChild(brick11);
        
        var brick12 = new Sprite(30,15);
        brick12.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick12.x = 200;
        brick12.y = 40;
        brick12.frame = 100;
        
        game.rootScene.addChild(brick12);
        
        var brick13 = new Sprite(30,15);
        brick13.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick13.x = 240;
        brick13.y = 40;
        brick13.frame = 100;
        
        game.rootScene.addChild(brick13);
        
        var brick14 = new Sprite(30,15);
        brick14.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick14.x = 60;
        brick14.y = 60;
        brick14.frame = 100;
        
        game.rootScene.addChild(brick14);
        
        var brick15 = new Sprite(30,15);
        brick15.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick15.x = 100;
        brick15.y = 60;
        brick15.frame = 100;
        
        game.rootScene.addChild(brick15);
        
        var brick16 = new Sprite(30,15);
        brick16.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick16.x = 140;
        brick16.y = 60;
        brick16.frame = 100;
        
        game.rootScene.addChild(brick16);
        
        var brick17 = new Sprite(30,15);
        brick17.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick17.x = 180;
        brick17.y = 60;
        brick17.frame = 100;
        
        game.rootScene.addChild(brick17);
        
        var brick18 = new Sprite(30,15);
        brick18.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick18.x = 220;
        brick18.y = 60;
        brick18.frame = 100;
        
        game.rootScene.addChild(brick18);
        
        var brick19 = new Sprite(30,15);
        brick19.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick19.x = 80;
        brick19.y = 80;
        brick19.frame = 100;
        
        game.rootScene.addChild(brick19);
        
        var brick20 = new Sprite(30,15);
        brick20.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick20.x = 120;
        brick20.y = 80;
        brick20.frame = 100;
        
        game.rootScene.addChild(brick20);
        
        var brick21 = new Sprite(30,15);
        brick21.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick21.x = 160;
        brick21.y = 80;
        brick21.frame = 100;
        
        game.rootScene.addChild(brick21);
        
        var brick22 = new Sprite(30,15);
        brick22.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick22.x = 200;
        brick22.y = 80;
        brick22.frame = 100;
        
        game.rootScene.addChild(brick22);
        
        var brick23 = new Sprite(30,15);
        brick23.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick23.x = 100;
        brick23.y = 100;
        brick23.frame = 100;
        
        game.rootScene.addChild(brick23);
        
        var brick24 = new Sprite(30,15);
        brick24.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick24.x = 140;
        brick24.y = 100;
        brick24.frame = 100;
        
        game.rootScene.addChild(brick24);
        
        var brick25 = new Sprite(30,15);
        brick25.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick25.x = 180;
        brick25.y = 100;
        brick25.frame = 100;
        
        game.rootScene.addChild(brick25);
        
        var brick26 = new Sprite(30,15);
        brick26.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick26.x = 120;
        brick26.y = 120;
        brick26.frame = 100;
        
        game.rootScene.addChild(brick26);
        
        var brick27 = new Sprite(30,15);
        brick27.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick27.x = 160;
        brick27.y = 120;
        brick27.frame = 100;
        
        game.rootScene.addChild(brick27);
        
        var brick28 = new Sprite(30,15);
        brick28.image = game.assets['http://img153.imageshack.us/img153/442/previewpg6.jpg'];
        brick28.x = 140;
        brick28.y = 140;
        brick28.frame = 100;
        
        game.rootScene.addChild(brick28);
        
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
                if (ball.intersect(brick28)) {
                    brick28.x = 5000;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick27)) {
                    brick27.x = 4750;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick26)) {
                    brick26.x = 4500;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick25)) {
                    brick25.x = 4250;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick24)) {
                    brick24.x = 4000;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick23)) {
                    brick23.x = 3750;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick22)) {
                    brick22.x = 3500;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick21)) {
                    brick21.x = 3250;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick20)) {
                    brick20.x = 3000;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick19)) {
                    brick19.x = 2750;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick18)) {
                    brick18.x = 2500;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick17)) {
                    brick17.x = 2250;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick16)) {
                    brick16.x = 2000;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick15)) {
                    brick15.x = 1750;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick14)) {
                    brick14.x = 1500;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick13)) {
                    brick13.x = 1250;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick12)) {
                    brick12.x = 1000;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick11)) {
                    brick11.x = -1000;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick10)) {
                    brick10.x = -1250;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick9)) {
                    brick9.x = -1500;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick8)) {
                    brick8.x = -1750;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick7)) {
                    brick7.x = -2000;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick6)) {
                    brick6.x = -2250;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick5)) {
                    brick5.x = -2500;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick4)) {
                    brick4.x = -2750;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick3)) {
                    brick3.x = -3000;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick2)) {
                    brick2.x = -3250;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
                if (ball.intersect(brick1)) {
                    brick1.x = -3500;
                    ball.dy = -ball.dy;
                    game.score = game.score + 10;
                }
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
                    game.end();                    
                }
            }
        });
	};
    
    // Start the game
	game.start();
};