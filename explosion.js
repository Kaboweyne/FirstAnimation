function Explosion(game) {
    this.name = "Explosion";
    //this.animation = new Animation(AM.getAsset("./img/RobotExplosion.png"), 0, 0, 206, 110, 0.02, 30, true, true);
   // (spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse)
   this.explosionFrames = [new Frame(80, 2523, 82, 84), new Frame(162, 2520, 86, 87),
    new Frame(249, 2513, 89, 94), new Frame(338, 2498, 89, 109),
    new Frame(427, 2498, 93, 109), new Frame(3, 2616, 103, 109),
    new Frame(106, 2616, 106, 109), new Frame(213, 2614, 110, 111),
    new Frame(324, 2614, 110, 111), new Frame(434, 2610, 110, 115),
    new Frame(324, 2614, 110, 111), new Frame(434, 2610, 110, 115)];
    this.blankFrames = [new Frame(0,0,0,0)];
    this.suicideAnimation = new Animation(AM.getAsset("./img/Explosion.png"),
		80, 2523, 82, 84, 0.12, this.explosionFrames.length, false, false, false, this.explosionFrames);
   this.nullAnimation =  new Animation(AM.getAsset("./img/Explosion.png"),
   80, 2523, 82, 84, 0.12, this.blankFrames.length, false, false, false, this.blankFrames);
   this.currentAnimation = this.nullAnimation;
    this.jumping = false;
    this.kicking = false;
    this.m_left = false;
    this.radius = 100;
    this.ground = 400;
    this.scaleBy = 5;
    this.currentBox = (20, 120, 96 * this.scaleBy, 158 * this.scaleBy);
    this.velocity = { x: 5 * 1000, y: 5 * 1000 };
    this.healthBar = new HealthBar(100, this.game);
    
    Entity.call(this, game, 350, 70);
}
var attack = false;
var rand = Math.floor(Math.random() * Math.floor(2))



Explosion.prototype = new Entity();
Explosion.prototype.constructor = Explosion;
Explosion.prototype.collide = function(other) {
	return this.currentBox.collide(other.currentBox);
}
Explosion.prototype.isAttacking = function() {
	return (this.kicking)
}
var count = 0;
var count2 = 0
Explosion.prototype.update = function () {
    console.log(this.y);
    // if(this.y < 100) {
    //     this.y+=100
    // }
    
    
    
    for (var i = 0; i < this.game.entities.length; i++) {
        var ent = this.game.entities[i];
        if(ent.name == "Saitama") {
            if(ent.currentAnimation.elapsedTime > 1.2) {
                this.currentAnimation = this.suicideAnimation;
                
            }
        }
    }
    if(this.suicideAnimation.isDone()){
        this.currentAnimation = this.nullAnimation;
    }
    //     if(ent.name != "Explosion") {
    //         if(ent.name == "Ryu") {
    //             ent.currentAnimation = ent.blockLeftAnimation;
    //         }
    //         if (ent.name == "Scorpion") {
    //             ent.currentAnimation = ent.blockLeftAnimation;
    //         }
    //         if(ent.name == "Goku") {
    //             ent.currentAnimation = ent.blockLeftAnimationB;
    //         }
    //         if(ent.name == "Frieza") {
    //             ent.currentAnimation = ent.blockRightAnimation;
    //         }
    //         if (ent.name == "Subzero") {
    //             ent.currentAnimation = ent.blockRightAnimation;
    //         }
    //         if(ent.name == "Ken") {
    //             ent.currentAnimation = ent.blockRightAnimation;
    //         }
           
    //     }
        

    // }

    Entity.prototype.update.call(this);
}

Explosion.prototype.attackHandler = function(other, mult) {
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

Explosion.prototype.draw = function (ctx) {
    //time = this.leftAnimation.elapsedTime;
    
    this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scaleBy);

    
    // }else {
    //     this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    // }
    
    Entity.prototype.draw.call(this);
}
