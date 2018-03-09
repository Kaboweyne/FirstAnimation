function Mario(game,x,y) {
this.name = "Mario";
this.facing  = "R";
this.actualWidth = 19;
this.actualHeight = 35;
    //this.animation = new Animation(AM.getAsset("./img/RobotMario.png"), 0, 0, 206, 110, 0.02, 30, true, true);
   // (spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse)
this.MovingFrames = [new Frame(9,88,19,35),new Frame(30,88,19,35),new Frame(51,88,19,35),new Frame(72,88,19,35),
    new Frame(92,88,19,35), new Frame(114,88,19,35),new Frame(135,88,19,35),new Frame(156,88,19,35) ]
   this.idleFrame = [new Frame(9,88,19,35)];
   this.animation = new Animation(AM.getAsset("./img/MarioReverse.png"), 435, 730, 43, 90, .08, this.MovingFrames.length, true, true, false, this.MovingFrames);
   this.Ranimation = new Animation(AM.getAsset("./img/Mario.png"), 435, 730, 43, 90, .08, this.MovingFrames.length, true, false, false, this.MovingFrames);
   this.idleAnimation = new Animation(AM.getAsset("./img/Mario.png"), 9,88,19,35, .08, 1, true, false, false, this.idleFrame)
   this.idleLeftAnimation = new Animation(AM.getAsset("./img/MarioReverse.png"), 9,88,19,35, .08, 1, true, true, false, this.idleFrame);
   this.animation.actualHeight = 19;
   this.idleAnimation.actualHeight = 19;
   this.idleAnimation.actualWidth = 19;
   this.idleLeftAnimation.actualHeight = 19;
   this.idleLeftAnimation.actualWidth = 19;
   this.animation.actualWidth = 19;
   this.Ranimation.actualHeight = 19;
   this.Ranimation.actualWidth = 35;
  //this.animation.
  this.currentAnimation = this.animation;
    this.jumping = false;
    this.kicking = false;
    this.m_left = false;
    this.radius = 100;
    this.ground = 400;
    this.scaleBy = 5;
    this.speed = 5;
    this.xView = x;
    this.yView = y;
    this.movingRight = false;
    this.movingLeft = false;
    this.currentBox = (20, 120, 96 * this.scaleBy, 158 * this.scaleBy);
    this.velocity = { x: 5 * 1000, y: 5 * 1000 };
    this.healthBar = new HealthBar(100, this.game);
    
    Entity.call(this, game, x, y);
}
var attack = false;
var rand = Math.floor(Math.random() * Math.floor(2))



Mario.prototype = new Entity();
Mario.prototype.constructor = Mario;
Mario.prototype.collide = function(other) {
	return this.currentBox.collide(other.currentBox);
}
Mario.prototype.isAttacking = function() {
	return (this.kicking)
}
var count = 0;
var count2 = 0
var range = 200;
var spotted = true;
Mario.prototype.update = function () {
    if(this.game.moveLeft) {
        this.movingLeft = true;
    } else {
        this.movingLeft = false;
    }
    if(this.game.moveRight) {
        this.movingRight = true;
    }else{
        this.movingRight = false;
    }
    if (this.movingRight) {
        //IF THIS IS NOT GETTING ATTACKED THE DO IT
            this.currentAnimation = this.Ranimation;
            this.facing = "R";

            if ((this.x < 1190)) {
                this.x += this.speed;
            }	

            if ((this.x < 640) || (this.x > 3200 && this.x < 3720)) {
                //this.xView += this.speed;
            }
        }
    
        
    else if (this.movingLeft) {
        this.facing = "L";
            
                if(this.x>=-5) {
                    this.x -= this.speed;
                }
            

            
            this.currentAnimation = this.animation;

            }
    else{
        if(this.facing == "R") {
            this.currentAnimation = this.idleAnimation;
        } else {
            this.currentAnimation = this.idleLeftAnimation;
        }
        
    }
    
    
    count ++;
    
    for (var i = 0; i < this.game.entities.length; i++) {
        
        var ent = this.game.entities[i];
        if(ent.name == "Boo") {
            console.log("Mario facing: " + this.facing);
            console.log("Boo facing: " + ent.facing);
            
            
                 
                
                 
            
            if(ent.appearAnimation.isDone()) {
                ent.appearAnimation.elapsedTime = 0;
            }
            if(ent.disappearAnimation.isDone()) {
                ent.disappearAnimation.elapsedTime = 0;
            }
            if(this.x < ent.x && (Math.abs(this.x - ent.x) > range)) {
                						ent.facing = "L";
                						ent.currentAnimation = ent.animation;
                						
                						ent.x -= ent.speed;
                					}
                else if(this.x > ent.x && (Math.abs(this.x - ent.x) > range-10)) {
                        
                						ent.facing = "R";
                						ent.currentAnimation = ent.Ranimation
                						
                						ent.x += ent.speed;
                					}
        
        
        
         else {
            if(ent.facing == "R" && this.facing == "L") {
                console.log("HEY")
                ent.currentAnimation = ent.appearLeftAnimation;
            } else if(ent.facing == "L" && this.facing == "R"){
                ent.currentAnimation = ent.disappearLeftAnimation;
            }
             else {
                 if(ent.facing == "R") {
                    ent.currentAnimation = ent.idleLeftAnimation;
                }else {
                    ent.currentAnimation = ent.idleAnimation;
                }
                if(ent.appearLeftAnimation.isDone()) {
                    ent.appearLeftAnimation.elapsedTime = 0;
                }
                if(ent.disappearLeftAnimation.isDone()) {
                    ent.disappearLeftAnimation.elapsedTime = 0;
                }
        }
    }

        
        
        

    
}
    }

    Entity.prototype.update.call(this);
}

Mario.prototype.attackHandler = function(other, mult) {
	if (this.currentAnimation === this.kickAnimation
		|| this.currentAnimation === this.kickAnimation) {
        other.healthBar.hp -= 0.5 * mult;
        }
	// } else if (this.currentAnimation === this.punchRight2Animation
	// 	|| this.currentAnimation === this.punchLeft2Animation) {
	// 	other.healthBar.hp -= 0.3 * mult;
	// } else if (this.currentAnimation === this.punchRight3Animation
	// 	|| this.currentAnimation === this.punchLeft3Animation) {
	// 	other.healthBar.hp -= 0.15 * mult;		
	// } else if (this.currentAnimation === this.kickRightAnimation
	// 	|| this.currentAnimation === this.kickAnimation) {
	// 	other.healthBar.hp -= 0.4 * mult;	
	// } else if (this.currentAnimation === this.kickAnimation
	// 	|| this.currentAnimation === this.kickAnimation) {
	// 	other.healthBar.hp -= 0.2 * mult;
	// }
	if (!other.blocking) {
		other.gettingAttacked = true;
	}
}

Mario.prototype.draw = function (ctx) {
    //time = this.leftAnimation.elapsedTime;
    
    this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scaleBy);

    
    // }else {
    //     this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    // }
    
    Entity.prototype.draw.call(this);
}
