function Saitama(game) {
    this.name = "Saitama";
    //this.animation = new Animation(AM.getAsset("./img/RobotSaitama.png"), 0, 0, 206, 110, 0.02, 30, true, true);
   // (spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse)
   this.entranceFrames = [new Frame(220, 230, 43, 55), new Frame(220, 230, 43, 55),
    new Frame(220, 230, 43, 55),new Frame(220, 230, 43, 55),new Frame(220, 230, 43, 55),
    new Frame(220, 230, 43, 55),new Frame(220, 230, 43, 55),
    new Frame(220, 230, 43, 55),new Frame(220, 230, 43, 55), new Frame(220, 230, 43, 55),new Frame(220, 230, 43, 55),
    new Frame(220, 230, 43, 55),new Frame(220, 230, 43, 55),new Frame(435, 730, 43, 90),
    new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),
    new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),
    new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),
    new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),
    new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),
    new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),
    new Frame(478, 730, 43, 90),new Frame(521, 730, 43, 90),new Frame(564, 730, 43, 90),new Frame(607, 730, 43, 90) ]
   this.animation = new Animation(AM.getAsset("./img/Saitama.png"), 435, 730, 43, 90, .1, this.entranceFrames.length, false, false, true, this.entranceFrames);
   this.kickAnimation = new Animation(AM.getAsset("./img/Saitama.png"), 0, 2383, 163, 158,.1, 6, false, false, false, null);
   this.jumpAnimation = new Animation(AM.getAsset("./img/Saitama.png"), 0, 1415, 108, 162, .1, 8, false, false, false, null);
   this.leftAnimation = new Animation(AM.getAsset("./img/Saitama.png"), 0, 1710, 140, 120, .2, 3, false, false, false, null);
   this.rightAnimation = new Animation(AM.getAsset("./img/Saitama.png"), 0, 1840, 114, 143, .2, 3, false, false, false, null);
   this.currentAnimation = this.animation;
    this.jumping = false;
    this.kicking = false;
    this.m_left = false;
    this.radius = 100;
    this.ground = 400;
    this.scaleBy = 5;
    this.currentBox = (20, 120, 96 * this.scaleBy, 158 * this.scaleBy);
    this.velocity = { x: 5 * 1000, y: 5 * 1000 };
    this.healthBar = new HealthBar(100, this.game);
    
    Entity.call(this, game, 520, -6000);
}
var attack = false;
var rand = Math.floor(Math.random() * Math.floor(2))



Saitama.prototype = new Entity();
Saitama.prototype.constructor = Saitama;
Saitama.prototype.collide = function(other) {
	return this.currentBox.collide(other.currentBox);
}
Saitama.prototype.isAttacking = function() {
	return (this.kicking)
}
var count = 0;
var count2 = 0
Saitama.prototype.update = function () {
    console.log(this.y);
    if(this.y < 100) {
        this.y+=100
    }
    
    
    count ++;
    for (var i = 0; i < this.game.entities.length; i++) {
        var ent = this.game.entities[i];
        if(count % 80 == 0) {

        
        if(ent.name != "Saitama") {
            if(ent.name == "Ryu") {
                ent.currentAnimation = ent.blockLeftAnimation;
            }
            if (ent.name == "Scorpion") {
                ent.currentAnimation = ent.blockLeftAnimation;
            }
            if(ent.name == "Goku") {
                ent.currentAnimation = ent.blockLeftAnimationB;
            }
            if(ent.name == "Frieza") {
                ent.currentAnimation = ent.blockRightAnimation;
            }
            if (ent.name == "Subzero") {
                ent.currentAnimation = ent.blockRightAnimation;
            }
            if(ent.name == "Ken") {
                ent.currentAnimation = ent.blockRightAnimation;
            }
           
        }
        

    }
}

    Entity.prototype.update.call(this);
}

Saitama.prototype.attackHandler = function(other, mult) {
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

Saitama.prototype.draw = function (ctx) {
    //time = this.leftAnimation.elapsedTime;
    
    this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scaleBy);

    
    // }else {
    //     this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    // }
    
    Entity.prototype.draw.call(this);
}
