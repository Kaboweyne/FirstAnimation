var AM = new AssetManager();
//var snd = new Audio("./sounds/mk.mp3");
// snd.volume = .05
// snd.play();



function Background(game, spritesheet) {
	this.game = game;
	this.spritesheet = spritesheet;
	this.ctx = game.ctx;
	this.x = 0;
	this.y = 0;
}


Background.prototype = new Entity();
Background.prototype.constructor = Background;

Background.prototype.draw = function(ctx, xView, yView) {
	// easiest way: draw the entire map changing only the destination coordinate in canvas
	// canvas will cull the image by itself (no performance gaps -> in hardware accelerated environments, at least)
	// context.drawImage(this.image, 0, 0, this.image.width, this.image.height, -xView, -yView, this.image.width, this.image.height);
	
	// didactic way:
	// var sx, sy, dx, dy;
	// var sWidth, sHeight, dWidth, dHeight;
	
	// // offset point to crop the image
	// sx = xView;
	// sy = yView;
	
	// // dimensions of cropped image			
	// sWidth =  ctx.canvas.width;
	// sHeight = ctx.canvas.height;

	// // if cropped image is smaller than canvas we need to change the source dimensions
	// if(3840 - sx < sWidth){ // Hardcoding: this.image.width == 3840
	// 	sWidth = 3840 - sx;
	// }
	// if(720 - sy < sHeight){
	// 	sHeight = 720 - sy; 
	// }
	
	// // location on canvas to draw the croped image
	// dx = 0;
	// dy = 0;
	// // match destination with source to not scale the image
	// dWidth = sWidth;
	// dHeight = sHeight;									
	
	ctx.drawImage(this.spritesheet, this.x - xView, this.y - yView);
}						

Background.prototype.update = function() {

}


/* KHOA:
	wrapper class for side scrolling background
*/
// possibles axis to move the camera
function Rectangle(left, top, width, height){
	this.left = left || 0;
	this.top = top || 0;
    this.width = width || 0;
	this.height = height || 0;
	this.right = this.left + this.width;
	this.bottom = this.top + this.height;
}

Rectangle.prototype = new Entity();
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.set = function(left, top, /*optional*/width, /*optional*/height){
	this.left = left;
    this.top = top;
    this.width = width || this.width;
    this.height = height || this.height
    this.right = (this.left + this.width);
    this.bottom = (this.top + this.height);
}

Rectangle.prototype.within = function(r) {
	return (r.left <= this.left && 
			r.right >= this.right &&
			r.top <= this.top && 
			r.bottom >= this.bottom);
}		

Rectangle.prototype.overlaps = function(r) {
	return (this.left < r.right && 
			r.left < this.right && 
			this.top < r.bottom &&
			r.top < this.bottom);
}

// possibles axis to move the camera
var AXIS = {
	NONE: "none", 
	HORIZONTAL: "horizontal", 
	VERTICAL: "vertical", 
	BOTH: "both"
};

// Camera constructor
function Camera(xView, yView, canvasWidth, canvasHeight, worldWidth, worldHeight, gameEngine)
{
	// position of camera (left-top coordinate)
	this.xView = xView || 0;
	this.yView = yView || 0;
	
	// distance from followed object to border before camera starts move
	this.xDeadZone = 0; // min distance to horizontal borders
	this.yDeadZone = 0; // min distance to vertical borders
	
	// viewport dimensions
	this.wView = canvasWidth;
	this.hView = canvasHeight;			
	
	// allow camera to move in vertical and horizontal axis
	this.axis = AXIS.BOTH;	

	// object that should be followed
	this.followed = null;
	
	// rectangle that represents the viewport
	this.viewportRect = new Rectangle(this.xView, this.yView, this.wView, this.hView);		
						
	// rectangle that represents the world's boundary (room's boundary)
	this.worldRect = new Rectangle(0, 0, worldWidth, worldHeight);

	this.gameEngine = gameEngine;
	
}

Camera.prototype = new Entity();
Camera.prototype.constructor = Camera;

// gameObject needs to have "x" and "y" properties (as world(or room) position)
Camera.prototype.follow = function(gameObject, xDeadZone, yDeadZone)
{		
	this.followed = gameObject;	
	this.xDeadZone = xDeadZone;
	this.yDeadZone = yDeadZone;
}					

Camera.prototype.update = function() {
	// keep following the player (or other desired object)
	if(this.followed != null)
	{		
		if(this.axis == AXIS.HORIZONTAL || this.axis == AXIS.BOTH)
		{		
			// moves camera on horizontal axis based on followed object position
			if(this.followed.x - this.xView  + this.xDeadZone > this.wView)
				this.xView = this.followed.x - (this.wView - this.xDeadZone);
			else if(this.followed.x  - this.xDeadZone < this.xView)
				this.xView = this.followed.x  - this.xDeadZone;
			this.gameEngine.xView = this.xView;
			
		}
		if(this.axis == AXIS.VERTICAL || this.axis == AXIS.BOTH)
		{
			// moves camera on vertical axis based on followed object position
			if(this.followed.y - this.yView + this.yDeadZone > this.hView)
				this.yView = this.followed.y - (this.hView - this.yDeadZone);
			else if(this.followed.y - this.yDeadZone < this.yView)
				this.yView = this.followed.y - this.yDeadZone;
		}						
	}		
	
	// update viewportRect
	this.viewportRect.set(this.xView, this.yView);
	
	// don't let camera leaves the world's boundary
	if(!this.viewportRect.within(this.worldRect))
	{
		if(this.viewportRect.left < this.worldRect.left)
			this.xView = this.worldRect.left;
		if(this.viewportRect.top < this.worldRect.top)					
			this.yView = this.worldRect.top;
		if(this.viewportRect.right > this.worldRect.right)
			this.xView = this.worldRect.right - this.wView;
		if(this.viewportRect.bottom > this.worldRect.bottom)					
			this.yView = this.worldRect.bottom - this.hView;
	}
	this.gameEngine.xView = this.xView;
	
}	

Camera.prototype.draw = function() {
	
}



function Frame(startX, startY, frameWidth, frameHeight) {
	this.startX = startX;
	this.startY = startY;
	this.frameWidth = frameWidth;
	this.frameHeight = frameHeight;
}

function Box(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}

Box.prototype.collide = function(other) {
	return (this.x < other.x + other.width
		&& this.x + this.width > other.x
		&& this.y < other.y + other.height
		&& this.y + this.height > other.y);
}

function HealthBar(hp, game, x, y) {
	this.hp = hp;
	this.color = "red";
	this.game = game;
	this.x = x;
	this.y = y;
}

HealthBar.prototype = new Entity();
HealthBar.prototype.constructor = HealthBar;

HealthBar.prototype.update = function() {

}

HealthBar.prototype.draw = function(ctx) {
	ctx.fillStyle = this.color;
	ctx.fillRect(this.x, this.y, this.hp * 5, 20);
}

AM.queueDownload("./img/GokuSS.png");
AM.queueDownload("./img/GokuSSReverse.png");
AM.queueDownload("./img/GokuSS2.png");
AM.queueDownload("./img/GokuSS2Reverse.png");
AM.queueDownload("./img/Saitama.png");
AM.queueDownload("./img/Frieza.png");
AM.queueDownload("./img/FriezaReverse.png");
AM.queueDownload("./img/namekbgr.png");
AM.queueDownload("./img/Explosion.png");


AM.downloadAll(function () {
	var canvas = document.getElementById("gameWorld");
	var ctx = canvas.getContext("2d");

	var gameEngine = new GameEngine();
	gameEngine.Camera = Camera;
	gameEngine.Rectangle = Rectangle;
	var bg = new Background(gameEngine, AM.getAsset("./img/namekbgr.png"));
	//var mario = new Mario(gameEngine,500,420);
	//var boo = new Boo(gameEngine,500,420);
	var saitama = new Saitama(gameEngine);
	var goku = new Goku(gameEngine,800,420);
	var frieza = new Frieza(gameEngine, 300,420);
	var explosion = new Explosion(gameEngine,400,420);
	var camera = new Camera(0, 0, canvas.width, canvas.height, 3840, 720, gameEngine);
	//var goku = new Gokku(gameEngine);
	//camera.follow(mario, canvas.width/2, canvas.height/2);

	//subzero.healthBar.x = 600;
	//subzero.healthBar.y = 80;
	
	// $('.enter_link').click(function() { 
    //     $(this).parent().fadeOut(500);
//  });;
	gameEngine.addEntity(bg);
	gameEngine.addEntity(saitama);
	gameEngine.addEntity(explosion);
	goku.isBot = true;
	gameEngine.addEntity(goku);
	frieza.isBot = true;
	gameEngine.addEntity(frieza);
	//gameEngine.addEntity(bg);
	//gameEngine.addEntity(boo);
	//gameEngine.addEntity(mario);
	//gameEngine.addEntity(camera);


	//gameEngine.addEntity(scorpionBot2);
	// gameEngine.addEntity(gokku);
	//gameEngine.addEntity(subzero);
	//gameEngine.addEntity(ryu);

	gameEngine.init(ctx);
	gameEngine.start();

})