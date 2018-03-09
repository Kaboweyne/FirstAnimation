/*
Jump is buggy right now. Fix is coming thou.
*/


/*Animation(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration,
	frames, loop, reverse, saveLast, readyFrames)*/
/*
	For reverse: startX = OverallSpriteWidth - regularStartX - (frameWidth * frames).
*/
function Frieza(game, x, y) {
	this.knockingBack = false;
	this.gettingAttackedCounter = 0;
	this.knockBackFrames = [new Frame(1, 6817 , 171, 91), new Frame(172, 6817 , 171, 91),
		new Frame(343, 6817 , 171, 91), new Frame(514, 6817 , 171, 91),
		new Frame(685, 6817 , 171, 91),new Frame(856, 6817 , 171, 91),
		new Frame(1027, 6817 , 171, 91)]
	/**
	 *     this.name = "Gokku";
    //this.animation = new Animation(AM.getAsset("./img/RobotGokku.png"), 0, 0, 206, 110, 0.02, 30, true, true);
   // (spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse)
   this.animation = new Animation(AM.getAsset("./img/Frieza.png"), 3, 390, 96, 158, .2, 6, true, false, false, null);
   this.kickAnimation = new Animation(AM.getAsset("./img/Frieza.png"), 0, 2383, 163, 158,.1, 6, false, false, false, null);
   this.jumpAnimation = new Animation(AM.getAsset("./img/Frieza.png"), 0, 1415, 108, 162, .1, 8, false, false, false, null);
   this.leftAnimation = new Animation(AM.getAsset("./img/Frieza.png"), 0, 1710, 140, 120, .2, 3, false, false, false, null);
   this.rightAnimation = new Animation(AM.getAsset("./img/Frieza.png"), 0, 1840, 114, 143, .2, 3, false, false, false, null);
   this.currentAnimation = this.animation;
    this.jumping = false;
    this.kicking = false;
    this.m_left = false;
    this.radius = 100;
    this.ground = 400;
    this.scaleBy = 1.8;
    this.currentBox = (20, 120, 96 * this.scaleBy, 158 * this.scaleBy);
    this.velocity = { x: 5 * 1000, y: 5 * 1000 };
    this.healthBar = new HealthBar(100, this.game);
    
    Entity.call(this, game, 0, 400);
	 */
	this.charged = false;
	this.name = "Frieza";
    this.velocity = { x: 200, y: 50 };
    this.img = AM.getAsset("./img/Frieza.png");

    this.idleFrames = [new Frame(0, 366, 138, 118), new Frame(138, 366, 138, 118),
        new Frame(276, 366, 138, 118),new Frame(414, 366, 138, 118),new Frame(552, 366, 138, 118),
        new Frame(690, 366, 138, 118),new Frame(828, 366, 138, 118),new Frame(966, 366, 138, 118),new Frame(1104, 366, 138, 118)
    ,new Frame(1242, 366, 138, 118)];
    
    this.attackedFrames = [new Frame(3, 5970 , 128, 113),new Frame(131, 5970 , 128, 113),
        new Frame(259, 5970 , 128, 113), new Frame(387, 5970 , 128, 113),
        new Frame(3, 6088 , 114, 95), new Frame(117, 6088 , 114, 95),
        new Frame(3, 6188 , 114, 95), new Frame(117, 6188 , 114, 95),
        new Frame(3, 6088 , 114, 95), new Frame(117, 6088 , 114, 95),
        new Frame(3, 6188 , 114, 95), new Frame(117, 6188 , 114, 95)];



	/*
	This are the ready frames for some animations. Some animations have different frame width
	for each frame, so it was easier to use the array of frames for each animation.
	*/
	this.crouchFrames = [new Frame(3, 1585, 103, 115), new Frame(106, 1585, 103, 115),
							new Frame(209, 1585, 103, 115)];
	this.crouchFramesB = [new Frame(3, 1235, 106, 105), new Frame(109, 1235, 106, 105),
								new Frame(215, 1235, 106, 105)];
	this.punchFrames = [new Frame(3, 1908, 143, 118), new Frame(146, 1908, 143, 118),
							 new Frame(289, 1908, 143, 118), new Frame(432, 1908, 143, 118)];
	this.punchFrames2 = [new Frame(243, 322, 57, 128), new Frame(302, 322, 60, 128),
							new Frame(368, 322, 76, 128)];
	this.punchFrames3 = [new Frame(478, 322, 58, 128), new Frame(536, 322, 63, 128),
							new Frame(536, 322, 63, 128)];

	this.kickFrames = [new Frame(3, 2028, 234, 118), new Frame(237, 2028, 234, 118),
						new Frame(471, 2028, 234, 118), new Frame(705, 2028, 234, 118),
						  new Frame(939, 2028, 234, 118), new Frame(1173, 2028, 234, 118),
						  new Frame(1407, 2028, 234, 118)];

	this.kickFrames2 = [new Frame(14, 603, 58, 128), new Frame(70, 603, 58, 128),
						new Frame(126, 603, 46, 128), new Frame(172, 603, 61, 128),
						  new Frame(648, 603, 85, 128), new Frame(648, 603, 85, 128),
						  new Frame(648, 603, 85, 128), new Frame(323, 603, 72, 128),
						  new Frame(172, 603, 61, 128)];

	this.blockFrames = [new Frame(3, 715, 110, 116), new Frame(113, 715, 110, 116),
						new Frame(112, 715, 110, 116)];

	this.jumpKickFrames = [new Frame(1051, 908, 53, 128), new Frame(1108, 908, 86, 128),
							new Frame(1108, 908, 86, 128),new Frame(1108, 908, 86, 128),
							new Frame(1108, 908, 86, 128),new Frame(1108, 908, 86, 128),
							new Frame(1108, 908, 86, 128),new Frame(1108, 908, 86, 128)];

	this.uppercutFrames = [new Frame(14, 907, 58, 128), new Frame(72, 907, 58, 128),
							new Frame(131, 907, 76, 128), new Frame(212, 882, 52, 153),
							new Frame(267, 892, 46, 143), new Frame(267, 892, 46, 143),
							new Frame(267, 892, 46, 143), new Frame(267, 892, 46, 143)];

	this.powerupFrames = [new Frame(3, 390, 96, 158), new Frame(3, 390, 96, 158),
		new Frame(3, 390, 96, 158), new Frame(3, 390, 96, 158),
		new Frame(99, 390, 96, 158), new Frame(99, 390, 96, 158),new Frame(195, 390, 96, 158),
		new Frame(291, 390, 96, 158),new Frame(387, 390, 96, 158),new Frame(387, 390, 96, 158),
		new Frame(387, 390, 96, 158),new Frame(387, 390, 96, 158),new Frame(483, 390, 96, 158),
		new Frame(483, 390, 96, 158),new Frame(483, 390, 96, 158)];
	this.chargeFrames = [new Frame(3, 390, 96, 158), new Frame(3, 390, 96, 158),
			new Frame(99, 390, 96, 158), new Frame(99, 390, 96, 158),
			new Frame(99, 390, 96, 158), new Frame(99, 390, 96, 158),new Frame(195, 390, 96, 158),
			new Frame(291, 390, 96, 158),new Frame(387, 390, 96, 158),new Frame(387, 390, 96, 158),
			new Frame(387, 390, 96, 158),new Frame(387, 390, 96, 158),new Frame(483, 390, 96, 158),
			new Frame(483, 390, 96, 158),new Frame(483, 390, 96, 158)];

	this.chargeFramesB = [new Frame(0, 1710, 104, 155), new Frame(0, 1710, 104, 155),
				new Frame(0, 1710, 104, 155), new Frame(0, 1710, 104, 155),
				new Frame(104, 1710, 104, 155), new Frame(208, 1710, 104, 155),new Frame(312, 1710, 104, 155),
				new Frame(416, 1710, 104, 155),new Frame(312, 1710, 104, 155),new Frame(416, 1710, 104, 155),
				new Frame(312, 1710, 104, 155),new Frame(416, 1710, 104, 155),
				new Frame(312, 1710, 104, 155),new Frame(416, 1710, 104, 155),
				new Frame(416, 1710, 104, 155),new Frame(312, 1710, 104, 155),new Frame(416, 1710, 104, 155),
				new Frame(312, 1710, 104, 155),new Frame(416, 1710, 104, 155),
				new Frame(312, 1710, 104, 155),new Frame(416, 1710, 104, 155),
				new Frame(416, 1710, 104, 155),new Frame(312, 1710, 104, 155),new Frame(416, 1710, 104, 155),
				new Frame(312, 1710, 104, 155),new Frame(416, 1710, 104, 155),
				new Frame(312, 1710, 104, 155),new Frame(416, 1710, 104, 155),
				new Frame(416, 1710, 104, 155),new Frame(312, 1710, 104, 155),new Frame(416, 1710, 104, 155),
				new Frame(312, 1710, 104, 155),new Frame(416, 1710, 104, 155),
				new Frame(312, 1710, 104, 155),new Frame(416, 1710, 104, 155),
				new Frame(416, 1710, 104, 155),new Frame(312, 1710, 104, 155),new Frame(416, 1710, 104, 155),
				new Frame(312, 1710, 104, 155),new Frame(416, 1710, 104, 155),
				new Frame(312, 1710, 104, 155),new Frame(416, 1710, 104, 155),
				new Frame(416, 1710, 104, 155),new Frame(312, 1710, 104, 155),new Frame(416, 1710, 104, 155),
				new Frame(312, 1710, 104, 155),new Frame(416, 1710, 104, 155),
				new Frame(312, 1710, 104, 155),new Frame(416, 1710, 104, 155)
			];




	//Actual width of Frieza?
	this.actualWidth = 58;

	this.actualHeight = 128;

	
	
	
    
    //this.idleAnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 3, 885, 110, 125, .2, 3, true, false, false, null);
	
	this.idleAnimation = new Animation(AM.getAsset("./img/FriezaReverse.png"), 0, 366, 138, 118, .2, this.idleFrames.length, true, true, false, this.idleFrames);
    
    
    //KNOCK BACK
    //this.idleAnimation = new Animation(AM.getAsset("./img/Frieza.png"), 3, 6819 , 170, 90, .2, 4, true, false, false, null);;
    
    //this.idleAnimation = new Animation(AM.getAsset("./img/Frieza.png"), 3, 6188 , 114, 95, .2, this.attackedFrames.length, true, false, false, this.attackedFrames);
    
    
    this.chargeAnimation = new Animation(AM.getAsset("./img/Frieza.png"), 0, 1710, 104, 155, .2, this.chargeFramesB.length, false, false, false, this.chargeFramesB);
	this.idleLeftAnimation = new Animation(AM.getAsset("./img/Frieza.png"), 0, 366, 138, 118, .2, this.idleFrames.length, true, false, false, this.idleFrames);
	this.moveAnimation = new Animation(AM.getAsset("./img/FriezaReverse.png"), 1290, 593, 105, 118, .2, 8, true, true, false, null);
	
	this.moveLeftAnimation = new Animation(AM.getAsset("./img/Frieza.png"), 0, 593, 105, 118, .2, 8, true, false, false, null);
	this.crouchAnimation = new Animation(AM.getAsset("./img/Frieza.png"),
	3, 1235, 106, 105, .1, 3, false,  false, true, this.crouchFramesB);
	
	this.crouchLeftAnimation = new Animation(AM.getAsset("./img/Frieza.png"),
	3, 1235, 106, 105, .1, 3, false,  false, true, this.crouchFramesB);
	

	this.punchRightAnimation = new Animation(AM.getAsset("./img/FriezaReverse.png"), 3, 1908, 143, 118, .1, this.punchFrames.length, false, true, false, this.punchFrames);

	this.punchLeftAnimation = new Animation(AM.getAsset("./img/Frieza.png"), 3, 1908, 143, 118, .1, this.punchFrames.length, false, false, false, this.punchFrames);

	this.punchRight3Animation = new Animation(AM.getAsset("./img/Frieza.png"), 3, 4647 , 143, 120, .1, 4, false, false, false, null);

	this.punchLeft3Animation = new Animation(AM.getAsset("./img/Frieza.png"), 3, 4647 , 143, 120, .1, 4, false, false, false, null);

	this.punchRight2Animation = new Animation(AM.getAsset("./img/Frieza.png"), 303, 4138, 140, 118, .1, 2, false, false, false, null);

	this.punchLeft2Animation = new Animation(AM.getAsset("./img/Frieza.png"), 303, 4138, 140, 118, .1, 2, false, false, false, null);

	this.kickRightAnimation = new Animation(AM.getAsset("./img/FriezaReverse.png"), 3, 2028, 234, 118, .1, this.kickFrames.length, false, true, false, this.kickFrames);

	this.kickLeftAnimation = new Animation(AM.getAsset("./img/Frieza.png"), 3, 2028, 234, 118, .1, this.kickFrames.length, false, false, false, this.kickFrames);

	this.kickRight3Animation = new Animation(AM.getAsset("./img/Frieza.png"), 3, 4778 , 160, 150, .1, 6, false, false, false, null);
	this.kickLeft3Animation = new Animation(AM.getAsset("./img/Frieza.png"), 3, 4778 , 160, 150, .1, 6, false, false, false, null);

	this.kickLeft2Animation = new Animation(AM.getAsset("./img/Frieza.png"), 3, 4485, 102, 150, .2, 4, false, false, false, null);
	this.kickRight2Animation = new Animation(AM.getAsset("./img/Frieza.png"), 3, 4485, 102, 150, .2, 4, false, false, false, null);

	this.kickRight3Animation = new Animation(AM.getAsset("./img/Frieza.png"), 3, 4778 , 160, 150, .1, 6, false, false, false, null);

	this.blockRightAnimation = new Animation(AM.getAsset("./img/FriezaReverse.png"), 3, 715, 110, 116, .2, this.blockFrames.length, false,true, true, this.blockFrames);

	this.blockLeftAnimation = new Animation(AM.getAsset("./img/Frieza.png"), 3, 715, 110, 116, .2, this.blockFrames.length, false,false, true, this.blockFrames);

	this.blockCrouchRightAnimation = new Animation(AM.getAsset("./img/Frieza.png"), 3, 1150, 83, 115, .2, 3, true, false, false, null);

	this.blockCrouchLeftAnimation = new Animation(AM.getAsset("./img/Frieza.png"), 3, 1150, 83, 115, .2, 3, true, false, false, null);

	this.jumpRightAnimation = new Animation(AM.getAsset("./img/Frieza.png"), 0, 1415, 108, 162, .1, 8, false, false, false, null);
	this.jumpLeftAnimation = new Animation(AM.getAsset("./img/Frieza.png"), 0, 1415, 108, 162, .1, 8, false, false, false, null);

	this.jumpKickRightAnimation = new Animation(AM.getAsset("./img/Frieza.png"), 0, 1415, 108, 162, .1, 8, false, false, false, null);

	this.jumpKickLeftAnimation = new Animation(AM.getAsset("./img/Frieza.png"), 0, 1415, 108, 162, .1, 8, false, false, false, null);
	this.uppercutRightAnimation = new Animation(AM.getAsset("./img/Frieza.png"),
		14, 907, 58, 128, 0.1, this.uppercutFrames.length, false, false, false, this.uppercutFrames);

	this.uppercutLeftAnimation = new Animation(AM.getAsset("./img/Frieza.png"),
		14, 907, 58, 128, 0.1, this.uppercutFrames.length, false, true, false, this.uppercutFrames);

	this.attackedRightAnimation = new Animation(AM.getAsset("./img/FriezaReverse.png"), 3, 6778 , 102, 140, .2, this.attackedFrames.length, false, true, false, this.attackedFrames);
	this.attackedLeftAnimation = new Animation(AM.getAsset("./img/Frieza.png"), 3, 6778 , 102, 140, .2, this.attackedFrames.length, false, false, false, this.attackedFrames);

	this.knockBackRightAnimation = new Animation(AM.getAsset("./img/FriezaReverse.png"), 3, 6960 , 146, 105, .2, this.knockBackFrames.length, false, true, false, this.knockBackFrames);

	this.knockBackLeftAnimation = new Animation(AM.getAsset("./img/Frieza.png"), 3, 6960 , 146, 105, .2, this.knockBackFrames.length, false, false, false, this.knockBackFrames);


// //this.idleAnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 3, 885, 110, 125, .2, 3, true, false, false, null);
// 	//this.idleAnimation = new Animation(AM.getAsset("./img/Frieza.png"), 3, 390, 96, 158, .2, this.powerupFrames.length, true, false, false, this.powerupFrames);
// 	this.chargeAnimationB = new Animation(AM.getAsset("./img/Frieza2.png"), 3, 390, 96, 158, .2, this.powerupFrames.length, false, false, false, this.powerupFrames);
// 	this.idleLeftAnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 3, 885, 110, 125, .2, 3, true, false, false, null);
// 	this.moveAnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 0, 1840, 114, 143, .2, 3, false, false, false, null);
	
// 	this.moveLeftAnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 0, 1710, 140, 120, .2, 3, false, false, false, null);
// 	this.crouchAnimationB = new Animation(AM.getAsset("./img/Frieza.png"),
// 		984, 23, 57.5, 128, 0.10, 3, false,  false, true, this.crouchFrames);
	
// 	this.crouchLeftAnimationB = new Animation(AM.getAsset("./img/Frieza.png"),
// 		984, 23,  57.5, 128, 0.10, 3, false,  true, true, this.crouchFrames);
	

// 	this.punchRightAnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 3, 2255, 147, 125, .1, 4, false, false, false, null);

// 	this.punchLeftAnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 3, 2255, 147, 125, .1, 4, false, false, false, null);

// 	this.punchRight3AnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 3, 4647 , 143, 120, .1, 4, false, false, false, null);

// 	this.punchLeft3AnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 3, 4647 , 143, 120, .1, 4, false, false, false, null);

// 	this.punchRight2AnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 303, 4038, 150, 134, .1, 2, false, false, false, null);

// 	this.punchLeft2AnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 303, 4038, 150, 134, .1, 2, false, false, false, null);

// 	this.kickRightAnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 0, 2383, 163, 158,.1, 6, false, false, false, null);

// 	this.kickLeftAnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 0, 2383, 163, 158,.1, 6, false, false, false, null);

// 	this.kickRight3AnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 3, 4778 , 160, 150, .1, 6, false, false, false, null);
// 	this.kickLeft3AnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 3, 4778 , 160, 150, .1, 6, false, false, false, null);

// 	this.kickLeft2AnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 3, 4485, 102, 150, .2, 4, false, false, false, null);
// 	this.kickRight2AnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 3, 4485, 102, 150, .2, 4, false, false, false, null);

// 	this.kickRight3AnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 3, 4778 , 160, 150, .1, 6, false, false, false, null);

// 	this.blockRightAnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 3, 1015, 98, 132, .2, this.blockFrames.length, false,false, true, this.blockFrames);

// 	this.blockLeftAnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 3, 1015, 98, 132, .2, this.blockFrames.length, false,false, true, this.blockFrames);

// 	this.blockCrouchRightAnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 3, 1150, 83, 115, .2, 3, true, false, false, null);

// 	this.blockCrouchLeftAnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 3, 1150, 83, 115, .2, 3, true, false, false, null);

// 	this.jumpRightAnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 0, 1415, 108, 162, .1, 8, false, false, false, null);
// 	this.jumpLeftAnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 0, 1415, 108, 162, .1, 8, false, false, false, null);

// 	this.jumpKickRightAnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 0, 1415, 108, 162, .1, 8, false, false, false, null);

// 	this.jumpKickLeftAnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 0, 1415, 108, 162, .1, 8, false, false, false, null);
// 	this.uppercutRightAnimationB = new Animation(AM.getAsset("./img/Frieza.png"),
// 		14, 907, 58, 128, 0.1, this.uppercutFrames.length, false, false, false, this.uppercutFrames);

// 	this.uppercutLeftAnimationB = new Animation(AM.getAsset("./img/FriezaReverse.png"),
// 		14, 907, 58, 128, 0.1, this.uppercutFrames.length, false, true, false, this.uppercutFrames);

// 	this.attackedRightAnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 3, 6778 , 102, 140, .2, 4, false, false, false, null);
// 	this.attackedLeftAnimationB = new Animation(AM.getAsset("./img/Frieza.png"), 3, 6778 , 102, 140, .2, 4, false, false, false, null);




	this.currentAnimation = this.idleAnimation;
	//Frieza's movement speed.
	this.speed = 3;
	
	//Frieza's states.
	this.movingRight = false;
	this.movingLeft = false;
	this.idling = true;
	this.crouching = false;
	
	this.facing = "R";

	this.charging = false;

	this.punching = false;
	this.punching2 = false;
	this.punching3 = false;

	this.kicking = false;
	this.kicking2 = false;
	this.kicking3 = false;

	this.blocking = false;
	this.jumping = false;

	this.jumpKicking = false;

	this.uppercutting = false;

	this.isBot = false;

	this.boxWidth = 58;
	this.boxHeight = 128;

	this.gettingAttacked = false;

	this.radius = 100;
    this.ground = 400;
    this.scaleBy = 1.8;
    this.currentBox = (20, 120, 96 * this.scaleBy, 158 * this.scaleBy);
    this.velocity = { x: 5 * 1000, y: 5 * 1000 };
    this.healthBar = new HealthBar(100, this.game);

	this.attackDamageMap = new Map();

	this.attackDamageMap.set(this.punching, 0.5);
	this.attackDamageMap.set(this.punching2, 0.3);
	this.attackDamageMap.set(this.punching3, 0.15);
	this.attackDamageMap.set(this.kicking, 0.4);
	this.attackDamageMap.set(this.kicking2, 0.2);

	this.xView = x;
	this.yView = y;

	Entity.call(this, game, x, y);
}
var kicksnd = new Audio("./sounds/kick.mp3");
var ducksnd = new Audio("./sounds/duck.mp3");
var punchsnd = new Audio("./sounds/punch.mp3");
var hitsnd = new Audio("./sounds/hit.mp3");
var jumpsnd = new Audio("./sounds/jumping.mp3");

var attack = false;

Frieza.prototype = new Entity();
Frieza.prototype.constructor = Frieza;

//Updates Frieza's state (frame).
/*Current bugs (features) :
1) If you press crouch and punch while jumping, then
Frieza will uppercut when lands.
*/
var ki = 0;
var energy = 0;
var count = 0;
var count2 = 0
// Frieza.prototype.update = function() {
// 	if(this.gettingAttacked) {
// 		this.gettingAttackedCounter++;
// 	}
// 	if (this.gettingAttackedCounter >= 100) {	
// 		this.currentAnimation = this.facing === "L" ? this.knockBackLeftAnimation : this.knockBackRightAnimation;
// 		this.knockingBack = true;
// 		if (this.x > 10 && this.x < 3700) {
// 			this.x += this.facing === 'L' ? 5 : -5;
// 		}
// 		if (this.currentAnimation.isDone()) {
// 			this.gettingAttacked = false;
// 			this.knockingBack = false;
// 			this.gettingAttackedCounter = 0;
// 			this.knockBackLeftAnimation.elapsedTime = 0;
// 			this.knockBackRightAnimation.elapsedTime = 0;
// 		}
// 	}
	

// 	if (this.healthBar.hp <= 0) {
// 		this.removeFromWorld = true;
// 	}

	 

// 	if (!this.isBot) {
		
	


// 		if (!this.game.crouch) {
// 			this.crouchAnimation.elapsedTime = 0;
// 			this.crouchLeftAnimation.elapsedTime = 0;
			
			
// 		}
// 		if (!this.game.block) {
// 			this.blockLeftAnimation.elapsedTime = 0;
// 			this.blockRightAnimation.elapsedTime = 0;
			
// 		}
// 		if (this.game.jump) {
// 			this.jumping = true;
// 			this.game.block = null;
// 			this.blocking = false;
// 			this.charging = false;
// 			this.chargeAnimation.elapsedTime = 0;
// 			if (this.game.jumpKick) {
// 				this.jumpKicking = true;
// 			}

// 		} else if (this.game.punch && this.gettingAttacked == false) {
// 			//console.log("you pressed punch key");
// 			this.punching = true;
// 			this.movingLeft = false;
// 			this.idling = false;
// 			this.crouching = false;
// 			this.movingRight = false;
// 			this.blocking = false;
// 			this.charging = false;
// 		} else if (this.game.punch2) {
// 			this.punching2 = true;
// 			this.movingLeft = false;
// 			this.idling = false;
// 			this.crouching = false;
// 			this.movingRight = false;
// 			this.blocking = false;
// 			this.charging = false;
// 		} else if (this.game.punch3) {
// 			this.punching3 = true;
// 			this.movingLeft = false;
// 			this.idling = false;
// 			this.crouching = false;
// 			this.movingRight = false;
// 			this.blocking = false;
// 			this.charging = false;
// 		} else if (this.game.kick) {
// 		this.kicking = true;
// 		this.movingLeft = false;
// 		this.idling = false;
// 		this.crouching = false;
// 		this.movingRight = false;
// 		this.blocking = false;
// 		this.charging = false;
// 		} 
// 		else if (this.game.kick2) {
// 			this.kicking2 = true;
// 			this.movingLeft = false;
// 			this.idling = false;
// 			this.crouching = false;
// 			this.movingRight = false;
// 			this.blocking = false;
// 			this.kicking = false;
// 			this.charging = false;
// 		}else if (this.game.kick3) {
// 				this.kicking3 = true;
// 				this.movingLeft = false;
// 				this.idling = false;
// 				this.crouching = false;
// 				this.movingRight = false;
// 				this.blocking = false;
// 				this.kicking2 = false;
// 				this.charging = false;
// 		} else if (this.game.block) {

// 			this.blocking = true;
// 			this.movingLeft = false;
// 			this.idling = false;
// 			this.charging = false;
// 			//this.crouching = false;
// 			this.movingRight = false;
// 			if (this.game.crouch) {
// 				this.crouching = true;
// 			} else {
// 				this.crouching = false;
// 			}
// 		} else if (this.game.uppercut) {
// 			this.uppercutting = true;
// 		}else if (this.game.crouch) {
// 			this.crouching = true;
// 			this.idling = false;
// 			this.movingRight = false;
// 			this.movingLeft = false;
// 			this.punching = false;
// 			//this.blocking = false;
// 			if (this.game.block) {
// 				this.blocking = true;
// 			} else {
// 				this.blocking = false;
// 			}

// 		} else if (this.game.moveRight) {
// 			this.movingRight = true;
// 			this.idling = false;
// 			this.crouching = false;
// 			this.movingLeft = false;
// 			this.punching = false;
// 			this.blocking = false;
// 			this.facing = "R";
// 			this.charging = false;
// 			this.chargeAnimation.elapsedTime = 0;
// 		} else if (this.game.moveLeft) {
// 			this.movingLeft = true;
// 			this.idling = false;
// 			this.crouching = false;
// 			this.movingRight = false;
// 			this.punching = false;
// 			this.blocking = false;
// 			this.facing = "L";
// 			this.charging = false;
// 			this.chargeAnimation.elapsedTime = 0;
// 		} else if (this.game.charge) {
// 			console.log("you pressed charge key");
// 			this.charging = true;
// 			this.punching = false;
// 			this.movingLeft = false;
// 			this.idling = false;
// 			this.crouching = false;
// 			this.movingRight = false;
// 			this.blocking = false;

// 		//} else if (this.game.jump) {
// 		//	this.jumping = true;
// 		//	this.idling = false;
// 		//	this.crouching = false;
// 			//this.movingRight = false;
// 		//	this.punching = false;
// 		//	this.blocking = false;
// 		}else  if (!this.game.moveRight && !this.game.crouch && !this.game.moveLeft
// 					&& !this.game.punch) {
// 			this.idling = true;
// 			this.movingRight = false;
// 			this.crouching = false;
// 			this.movingLeft = false;
// 			this.punching = false;
// 			this.blocking = false;
// 			this.charging = false;
// 			this.chargeAnimation.elapsedTime = 0;
// 		} 



// 		//FUN EASTER EGG STUFF, BETTER TO REMOVE in prototype!
// 		//ULTRA SPEED is activated when "U" key is pressed
// 		//and deactivated when "U" is pressed again
// 		/*if (this.game.ultraSpeed) {
// 			this.speed += 0.1;
// 		} else {
// 			this.speed = 5;
//         }*/
//         if(this.gettingAttacked == false) {
// 			this.attackedLeftAnimation.elapsedTime = 0;
// 			this.attackedRightAnimation.elapsedTime = 0;
// 		}

// 		 else if (this.gettingAttacked) {
// 		 	if (this.blocking) {
// 				if (this.facing === "R") {
// 					if (this.crouching) {
// 						this.currentAnimation = this.blockCrouchRightAnimation;
// 					} else {
// 						this.currentAnimation = this.blockRightAnimation;
						
// 					}
// 				} else {
// 					if (this.crouching) {
// 						this.currentAnimation = this.blockCrouchLeftAnimation;
// 					} else {
// 						this.currentAnimation = this.blockLeftAnimation;
// 					}
// 				}
// 			} else {
//                  this.currentAnimation = this.facing === "L" ? this.attackedLeftAnimation : this.attackedRightAnimation;
//                  this.punching = false;
//                  this.game.punch = null;
//                  this.gettingAttacked = true;
//                  this.punching2 = false;
// 	 			if (this.currentAnimation.isDone()) {
			
// 	 				this.currentAnimation.elapsedTime = 0;
// 	 				this.gettingAttacked = false;
// 	 				//this.currentAnimation = this.facing === "L" ? this.idleLeftAnimation : this.idleAnimation;
// 	 			}
// 	 		}	
// 		} else  if (this.blocking) {
// 			if (this.facing === "R") {
// 				if (this.crouching) {

// 					this.currentAnimation = this.blockCrouchRightAnimation;
					
// 				} else {
// 					this.currentAnimation = this.blockRightAnimation;
// 					if(this.blockRightAnimation.isDone()) {
// 						//this.blockRightAnimation.elapsedTime = this.blockRightAnimation.frameDuration+.1;
						
// 						//this.blockRightAnimation.elapsedTime = 0;
					
// 					}
// 				}
// 			} else {
// 				if (this.crouching) {
// 					this.currentAnimation = this.blockCrouchLeftAnimation;
// 				} else {
// 					this.currentAnimation = this.blockLeftAnimation;
// 					if(this.blockLeftAnimation.isDone()) {
// 							console.log("Block is done")
// 							//this.blockLeftAnimation.elapsedTime = 0;
							
							
							
						
// 					}
					
// 				}
// 			}
	
		
// 		} else if (this.punching) {
// 			if (this.facing === "R") {
// 				this.currentAnimation = this.punchRightAnimation;
// 				if(this.punchRightAnimation.elapsedTime > .2){
// 					punchsnd.play();
// 				}
// 				if (this.punchRightAnimation.isDone()) {
// 					this.punchRightAnimation.elapsedTime = 0;
// 					this.punching = false;
// 					this.game.punch = null;
// 				}
// 			} else if (this.facing === "L") {
// 				if (this.punchLeftAnimation.isDone()) {
// 					this.punchLeftAnimation.elapsedTime = 0;
// 					this.punching = false;
// 					this.game.punch = null;
// 				}
// 				this.currentAnimation = this.punchLeftAnimation;
// 				if(this.punchLeftAnimation.elapsedTime > .2){
// 					punchsnd.play();
// 				}
// 			}
// 		} else if (this.punching2) {
// 			if (this.facing === "R") {
// 				this.currentAnimation = this.punchRight2Animation;
// 				if(this.punchRight2Animation.elapsedTime > .2){
// 					punchsnd.play();
// 				}
// 				if (this.punchRight2Animation.isDone()) {
// 					this.punchRight2Animation.elapsedTime = 0;
// 					this.punching2 = false;
// 					this.game.punch2 = null;
// 				}
// 			} else if (this.facing === "L") {
// 				this.currentAnimation = this.punchLeft2Animation;
// 				if(this.punchLeft2Animation.elapsedTime > .2){
// 					punchsnd.play();
// 				}
// 				if (this.punchLeft2Animation.isDone()) {
// 					this.punchLeft2Animation.elapsedTime = 0;
// 					this.punching2 = false;
// 					this.game.punch2 = null;
// 				}
// 			}
// 		} else if (this.punching3) {
// 			if (this.facing === "R") {
// 				this.currentAnimation = this.punchRight3Animation;
// 				if(this.punchRight3Animation.elapsedTime > .2){
// 					kicksnd.play();
// 				}
// 				if (this.punchRight3Animation.isDone()) {
// 					this.punchRight3Animation.elapsedTime = 0;
// 					this.punching3 = false;
//                     this.game.punch3 = null;
                    
// 				}
// 			} else if (this.facing === "L") {
// 				this.currentAnimation = this.punchLeft3Animation;
// 				if(this.punchLeft3Animation.elapsedTime > .2){
// 					kicksnd.play();
// 				}
// 				if (this.punchLeft3Animation.isDone()) {
// 					this.punchLeft3Animation.elapsedTime = 0;
// 					this.punching3 = false;
// 					this.game.punch3 = null;
// 				}
// 			}
// 		} else if (this.kicking && !this.kicking2) {
// 			if (this.facing === "R") {
// 				this.currentAnimation = this.kickRightAnimation;
// 				if(this.kickRightAnimation.elapsedTime > .4){
// 					kicksnd.play();
// 				}
// 				if (this.kickRightAnimation.isDone()) {
					
// 					this.kickRightAnimation.elapsedTime = 0;
// 					this.kicking = false;
// 					this.game.kick = false;
// 				}
// 			} else if (this.facing === "L") {
// 				this.currentAnimation = this.kickLeftAnimation;
// 				if(this.kickLeftAnimation.elapsedTime > .4){
// 					kicksnd.play();
// 				}
// 				if (this.kickLeftAnimation.isDone()) {
// 					kicksnd.play()
// 					this.kickLeftAnimation.elapsedTime = 0;
// 					this.kicking = false;
// 					this.game.kick = false;
// 				}
// 			}
// 		} else if(this.kicking2 && !this.kicking3) {
// 			if (this.facing === "R") {
// 				this.kicking = false;
// 				this.currentAnimation = this.kickRight2Animation;
// 				if(this.kickRight2Animation.elapsedTime > .2){
// 					hitsnd.play();
// 				}
// 				if (this.kickRight2Animation.isDone()) {
// 					this.kickRight2Animation.elapsedTime = 0;
					
					
// 					this.kicking2 = false;
// 					this.game.kick2 = false;
// 				}
// 			} else if (this.facing === "L") {
// 				this.kicking = false;
// 				this.currentAnimation = this.kickLeft2Animation;
// 				if(this.kickLeft2Animation.elapsedTime > .2){
// 					hitsnd.play();
// 				}
// 				if (this.kickLeft2Animation.isDone()) {
// 					this.kickLeft2Animation.elapsedTime = 0;
// 					this.kicking2 = false;
// 					this.game.kick2 = false;
// 				}
// 			}
// 		}
// 			else if(this.kicking3) {
// 				if (this.facing === "R") {
// 					this.kicking2 = false;
// 					this.currentAnimation = this.kickRight3Animation;
// 					if(this.kickRight3Animation.elapsedTime > .2){
// 						hitsnd.play();
// 					}
// 					if (this.kickRight3Animation.isDone()) {
// 						this.kickRight3Animation.elapsedTime = 0;
						
						
// 						this.kicking3 = false;
// 						this.game.kick3 = false;
// 					}
// 				} else if (this.facing === "L") {
// 					this.kicking = false;
// 					this.currentAnimation = this.kickLeft3Animation;
// 					if(this.kickLeft3Animation.elapsedTime > .2){
// 						hitsnd.play();
// 					}
// 					if (this.kickLeft3Animation.isDone()) {
// 						this.kickLeft3Animation.elapsedTime = 0;
// 						this.kicking3 = false;
// 						this.game.kick3 = false;
// 					}
// 				}
			
// 		// } else if (this.charging) {
// 		// 	if(ki%100 == 0) {
// 		// 		energy ++;
// 		// 	}
// 		// 	ki++;
			
			
// 			//this.charged = true;
// 			// console.log("ENERGY: "+ energy);
// 			// this.currentAnimation = this.chargeAnimation;
// 			// if(this.currentAnimation.isDone()) {
// 			// 	//this.currentAnimation.elapsedTime = 0;
// 			// 	this.charging = false;
// 			// 	//this.game.charge = null;
// 			// }
// 		}else if (this.jumping) {
// 			if (this.facing === "R") {
// 				if (this.jumpKicking) {
// 					this.currentAnimation = this.jumpRightAnimation;
// 				} else {
// 					this.currentAnimation = this.jumpRightAnimation;
// 						jumpsnd.play();
					
// 				}

// 				if (this.currentAnimation.isDone()) {
// 					this.jumpRightAnimation.readyFrames = null;
// 					this.jumpKickRightAnimation.elapsedTime = 0;
// 					this.jumpRightAnimation.elapsedTime = 0;
// 					this.jumping = false;
// 					this.jumpKicking = false;
// 					this.game.jumpKick = null;
// 					this.game.jump = null;
// 				}
// 				console.log("Friezas move right " +  this.movingRight);
// 				if (this.movingRight && this.x < 3720) {
// 					this.x += this.speed;
// 				}

// 				if ((this.x < 640) || (this.x > 3200 && this.x < 3720)) {
// 					this.xView += this.speed;
// 				}
// 			} else if (this.facing === "L") {
// 				if (this.jumpKicking) {
// 					this.currentAnimation = this.jumpRightAnimation;
// 				} else {
// 					this.currentAnimation = this.jumpLeftAnimation;
// 					jumpsnd.play();
// 				}
// 				if (this.currentAnimation.isDone()) {
// 					this.jumpLeftAnimation.readyFrames = null;
// 					this.jumpLeftAnimation.elapsedTime = 0;
// 					this.jumpKickLeftAnimation.elapsedTime = 0;
// 					this.jumpKicking = false;
// 					this.jumping = false;
// 					this.game.jumpKick = null;
// 					this.game.jump = null;
// 				}
// 				if (this.movingLeft && this.x >= 0) {
// 					this.x -= this.speed;
// 				}

// 				if ((this.x >= 0 && this.x < 640) || (this.x > 3200 && this.x < 3720)) {
// 					this.xView += -1 * (this.speed);
// 				}
// 			}
// 			var jumpDistance = this.currentAnimation.elapsedTime / this.currentAnimation.totalTime;
// 				var totalHeight = 360;
// 				if (jumpDistance > 0.5) {
// 					jumpDistance = 1 - jumpDistance;
// 				}
// 				var height = totalHeight * (-4 * (jumpDistance * jumpDistance - jumpDistance));
// 				this.y = 420 - height;
// 		} else if (this.uppercutting) {
// 			if (this.facing === "R") {
// 				this.currentAnimation = this.uppercutRightAnimation;
// 				if(this.uppercutRightAnimation > .2) {
// 					hitsnd.play();
// 				}
// 				if (this.currentAnimation.isDone()) {
// 					this.uppercutRightAnimation.elapsedTime = 0;
// 					this.uppercutting = false;
// 					this.game.uppercut = null;
// 				}
// 			} else {
// 				this.currentAnimation = this.uppercutLeftAnimation;
// 				if(this.uppercutLeftAnimation > .2) {
// 					hitsnd.play();
// 				}
// 				if (this.currentAnimation.isDone()) {
// 					this.uppercutLeftAnimation.elapsedTime = 0;
// 					this.uppercutting = false;
// 					this.game.uppercut = null;
// 				}
// 			}
// 		} else if (this.movingRight) {
// 			this.currentAnimation = this.moveAnimation;
// 			if (this.moveAnimation.isDone()) {
// 				this.moveAnimation.elapsedTime = 0;
//                 if(this.movingRight) {
				

//                     //this.moveLeftAnimation.elapsedTime = .2;
//                 } 
//                 else {
                
//                 this.movingLeft = false;
//                 this.game.moveLeft = null;
// 				}
// 			}

// 			if ((this.x < 3720)) {
// 				this.x += this.speed;
// 			}	

// 			if ((this.x < 640) || (this.x > 3200 && this.x < 3720)) {
// 				this.xView += this.speed;
// 			}
			
			
// 		} else if (this.movingLeft) {
//             this.currentAnimation = this.moveLeftAnimation;
//             if (this.moveLeftAnimation.isDone()) {
// 				this.moveLeftAnimation.elapsedTime = 0;
//                 if(this.movingLeft) {
				

//                     //this.moveLeftAnimation.elapsedTime = .2;
//                 } 
//                 else {
                
//                 this.movingLeft = false;
//                 this.game.moveLeft = null;
//                 }
                
//             }

// 			if (this.x >= 0) {
// 				this.x += -1 * (this.speed);
// 			}

// 			if ((this.x >= 0 && this.x < 640) || (this.x > 3200 && this.x < 3720)) {
// 				this.xView += -1 * (this.speed);
// 			}
// 		} else  if (this.crouching === true) {
// 			if (this.facing === "R") {
// 				this.currentAnimation = this.crouchAnimation;
				
// 					ducksnd.play();
				
// 			} else {
// 				if (this.uppercutting) {
					
// 				} else {
// 					this.currentAnimation = this.crouchLeftAnimation;
					
// 						ducksnd.play();
					
// 				}
// 			}
// 		} else  {
// 			if (this.facing === "R") {
// 				if(this.charged) {
// 					this.currentAnimation = this.idleAnimationB;
// 				}else {
// 					this.currentAnimation = this.idleAnimation;
// 				}
				
// 			} else {
// 				if(this.charged) {
// 					this.currentAnimation = this.idleAnimationB;
// 				}else {
// 					this.currentAnimation = this.idleLeftAnimation;
// 				}
// 			}
// 		}
// 		//var heightDiff = this.boxHeight - this.currentAnimation.getFrameHeight();
// 		//this.y = heightDiff === 0 ? this.y : this.y + (heightDiff * this.scaleBy);
// 		//this.currentAnimation.getFrameWidth();
// 		//this.currentAnimation.getFrameHeight();
		
// 		//console.log("my x is: " + this.x);
// 		//console.log("myHeight is: " + this.currentAnimation.getFrameHeight());
// 		//console.log("myWidth is:  " + this.currentAnimation.getFrameWidth());
// 		console.log("IM charging! " + this.charging);
// 	}else {
//         if(this.isBlocking) {
            
//         }
		
//         //this.currentAnimation.elapsedTime = 0;
// 		// if (!this.gettingAttacked) {
// 		// 	var next = Math.random();
			
// 		// 		this.currentAnimation = this.facing === "L" ? this.idleLeftAnimation : this.idleAnimation;
// 		// }
// 	}
// 	// if(energy > 5) {
// 	// 	this.currentAnimation = this.chargeAnimationB;
// 	// 	if(this.chargeAnimationB.isDone()) {
// 	// 		this.charging = false;
// 	// 		this.currentAnimation = this.idleAnimationB;
// 	// 		energy = 0;
// 	// 		ki = 0;
// 	// 	}
// 	// 	this.charged = true;
// 	// }
// 	// if(this.charging == false) {
// 	// 	this.chargeAnimation.elapsedTime = 0;
// 	// }

// 	//console.log("my y is: " + this.currentAnimation.getY(this.y, this.scaleBy) + 
// 			//"\n my x is: " + this.x + "\n myHeight is: " + this.currentAnimation.getFrameHeight() * this.scaleBy + 
// 		//"\n myWidth is:  " + this.currentAnimation.getFrameWidth() * this.scaleBy);
// 		var currentBox = new Box(this.currentAnimation.getX(this.x, this.scaleBy),
// 			this.currentAnimation.getY(this.y, this.scaleBy),
// 			this.currentAnimation.getFrameWidth() * this.scaleBy,
// 			this.currentAnimation.getFrameHeight() * this.scaleBy);
// 		this.currentBox = currentBox;

// 	//Detect collision with other entities
// 	var range = 116
// 	if(count > 2000){
// 		count = 0;
// 	}
// 	for (var i = 0; i < this.game.entities.length; i++) {
// 		var ent = this.game.entities[i];
// 		if(!(this.isBot)){
// 				if (ent.gettingAttackedCounter >= 100) {
// 					ent.currentAnimation = ent.facing === "L" ? ent.knockBackLeftAnimation : ent.knockBackRightAnimation;
// 					if (ent.x > 10 && ent.x < 3700) {
// 						ent.x += ent.facing === 'L' ? 5 : -5;
// 					}
// 					if (ent.currentAnimation.isDone()) {
// 						console.log("should be done falling");
// 						ent.gettingAttacked = false;
// 						ent.gettingAttackedCounter = 0;
// 						ent.knockBackLeftAnimation.elapsedTime = 0;
// 						ent.knockBackRightAnimation.elapsedTime = 0;
// 					}
// 				}
// 				//console.log("COUNT "+count)

// 				//BOTS ATTACK LOGIC
// 				//Player on the right
// 				if (ent !== this && ent.currentBox && this.collide(ent)) {
// 					if(this.isAttacking && this.gettingAttacked == false) {
// 						attack = true;
// 					} else {
// 						attack = false;
// 					}
// 					//console.log(Math.abs(this.x - ent.x));
// 					if (this.x > ent.x && Math.abs(this.x - ent.x) < range) {
						
// 						count++;
		
// 						if(count % 30 == 0) {
// 							rand = Math.floor(Math.random() * 3);
// 						}
// 						//console.log("Right");
// 						if(this.kicking){
// 							attack = true;
// 							//console.log("kicking");
// 							//ent.gettingAttacked == true;
// 						}
// 						if(attack){
							
// 							//console.log("Here's the random number "+ rand);
// 							//var rand = Math.floor(Math.random() * 3);
// 							if(rand === 0){
// 								ent.currentAnimation = ent.kickRightAnimation;
// 								this.facing = "L";
// 								console.log("bot is kicking");
// 								if (this.blocking) {
// 									ent.attackHandler(this, 0.3);
// 								} else {
// 									ent.attackHandler(this, 1);
//                                     this.gettingAttacked = true;
//                                     this.punching = false;
//                                     this.punching2 = false;
//                                     this.punching3 = false;
//                                     this.kicking = false;
//                                     this.kicking2 = false;
//                                     this.kicking3 = false;
// 								}
// 								//console.log("Elapsed " + ent.game.clockTick);
// 								if(ent.currentAnimation.isDone()) {
// 									//console.log("I'm done kicking right");
// 									//rand = Math.floor(Math.random() * Math.floor(2))
// 								}
// 							}
// 							if(rand === 1){
//                                 ent.currentAnimation = ent.punchRightAnimation;
// 								this.facing = "L";
// 								console.log("bot is punching");
// 								if (this.blocking) {
// 									ent.attackHandler(this, 0.3);
// 								} else {
// 									ent.attackHandler(this, 1);
// 								}
// 								if(ent.currentAnimation.isDone()) {
// 									//rand = Math.floor(Math.random() * Math.floor(2))
// 								}
// 							}
// 							if(rand === 2) {
// 								ent.currentAnimation = ent.blockRightAnimation
// 								if(ent.currentAnimation.isDone()) {
									
// 									//rand = Math.floor(Math.random() * Math.floor(2))
// 								}
// 							}
		
							
// 						} else {
                            
                            
// 							if (ent.isBlocking) {
// 								this.attackHandler(ent, 0.3)
// 							} else {
// 								this.attackHandler(ent, 1);
// 							}
// 							if (ent.currentAnimation.isDone()) {
			
// 	 							ent.currentAnimation.elapsedTime = 0;
// 	 							ent.gettingAttacked = false;
// 	 							//this.currentAnimation = this.facing === "L" ? this.idleLeftAnimation : this.idleAnimation;
// 	 						}	
// 						}
						
// 						//ent.velocity = 0;

// 						//Player on the left
// 					} if (this.x < ent.x && (Math.abs(this.x - ent.x) < range+60)) {
						
// 						if(count2 % 50 == 0) {
// 							rand2 = Math.floor(Math.random() * 3);
// 						}
// 						count2++;
// 						if(!this.isAttacking()){
							
// 							if(rand2 == 0){
// 								//console.log("Left");
// 								ent.currentAnimation = ent.kickLeftAnimation;
// 								if (this.blocking) {
// 									ent.attackHandler(this, 0.3);
// 								} else {
// 									ent.attackHandler(this, 1);
// 									this.facing = "R";
// 								}
// 								//console.log("Elapsed " + ent.game.clockTick)
// 								if(ent.currentAnimation.isDone()) {
// 								//	console.log("I'm done kicking right")
// 									//rand = Math.floor(Math.random() * Math.floor(2))
// 								}
// 							}
// 							if(rand2 == 1){
								
// 								ent.currentAnimation = ent.punchLeftAnimation;
// 								if (this.blocking) {
// 									ent.attackHandler(this, 0.3);
// 								} else {
// 									ent.attackHandler(this, 1);
// 									this.facing = "R";
// 								}
// 								if(ent.currentAnimation.isDone()) {
// 									//rand = Math.floor(Math.random() * Math.floor(2))
// 								}
// 							}
// 							if(rand2 == 2) {
// 								ent.currentAnimation = ent.blockLeftAnimation;

// 								if(ent.currentAnimation.isDone()) {
									
// 									//rand = Math.floor(Math.random() * Math.floor(2))
// 								}
// 							}
// 							if(ent.healthBar.hp <=0) {
// 								ent.removeFromWorld = true;
// 							}
// 							if(this.healthBar.hp <=0){
// 								ent.currentAnimation = ent.idleAnimation;
// 							}
// 						} else {
// 							ent.currentAnimation =  ent.attackedLeftAnimation;
// 							if (ent.isBlocking) {
// 								this.attackHandler(ent, 0.3)
// 							} else {
// 								this.attackHandler(ent, 1);
// 							}
// 							if (ent.currentAnimation.isDone()) {
			
// 	 							ent.currentAnimation.elapsedTime = 0;
// 	 							ent.gettingAttacked = false;
// 	 							//this.currentAnimation = this.facing === "L" ? this.idleLeftAnimation : this.idleAnimation;
// 	 						}	
//                         }
//                         if(this.isAttacking == false) {
//                             ent.gettingAttacked = false;
//                         }
// 					}
// 					// Scorpion.prototype.isAttacking = function() {
// 					//     return (this.punching || this.punching2 || this.punching3
// 					//         || this.kicking || this.kicking2 || this.uppercutting
// 					//         || this.jumpKicking);
// 					//}
// 					//this.attackHandler(ent, 0.3);
// 					//this.x += this.velocity.x * this.game.clockTick;
// 					//this.y += this.velocity.y * this.game.clockTick;
// 					//ent.x += ent.velocity.x * this.game.clockTick;
// 					//ent.y += ent.velocity.y * this.game.clockTick;
		
// 					//console.log("They collide!");
// 				}
			   
// 			   //BOTS FOLLOW LOGIC
// 				if(ent !== this && ent.currentBox && !(this.collide(ent))){
// 					//attack == false;
// 					//console.log("THE NUMBER " + Math.abs(this.x - ent.x))
// 					//console.log(this.x < ent.x);
// 					//console.log("IF " + (Math.abs(this.x - ent.x) < range));
// 					//this.x += this.velocity.x * this.game.clockTick;
// 					// console.log("Box " +ent.currentBox);
// 					// console.log("Frieza " +this.x);
// 					// console.log("Scorpion "+ ent.x);
// 					if(this.x < ent.x && !(Math.abs(this.x - ent.x) < range)) {
// 						ent.facing = "L";
// 						ent.currentAnimation = ent.moveLeftAnimation;
// 						ent.x -= ent.speed;
// 					}
// 					else if(this.x > ent.x && !(Math.abs(this.x - ent.x) < range-10)) {
// 						ent.facing = "R";
// 						ent.currentAnimation = ent.moveAnimation
// 						ent.x += ent.speed;
// 					}
// 					if(this.game.kick && this.currentAnimation.isDone()) {
// 						attack = true;
// 					} else {
// 						attack = false;
// 					}
					
					
					
		
// 				}
			

// 		}
// 		// if (ent !== this && ent.currentBox && this.collide(ent)) {
// 		// 	console.log("They collide!");

// 		// 	if (this.isAttacking()) {
// 		// 		if (this.facing === "R" && this.isToTheLeftOf(ent)) {
// 		// 			if (!ent.blocking) {
// 		// 				this.attackHandler(ent, 1);
// 		// 			} else {
// 		// 				this.attackHandler(ent, 0.3);
// 		// 			}
// 		// 			ent.facing = "L";
// 		// 		} else if (this.facing === "L" && !this.isToTheLeftOf(ent)) {
// 		// 			if (!ent.blocking) {
// 		// 				this.attackHandler(ent, 1);
// 		// 			} else {
// 		// 				this.attackHandler(ent, 0.3);
// 		// 			}
// 		// 			ent.facing = "R";
// 		// 		}
// 		// 	}
// 		// }
// 	}

// 	if (!this.isBot) {
// 		console.log("blocking is: " + this.blocking);
// 	}
// 	Entity.prototype.update.call(this);
// }

Frieza.prototype.collide = function(other) {
	return this.currentBox.collide(other.currentBox);
}

Frieza.prototype.isAttacking = function() {
	return (this.punching || this.punching2 || this.punching3
		|| this.kicking || this.kicking2 || this.uppercutting
		|| this.jumpKicking);
}

Frieza.prototype.isToTheLeftOf = function(other) {
	return (this.x < other.x);
}

Frieza.prototype.getAttackType = function() {
	if (this.punching) {
		return this.punching;
	} else if (this.punching2) {
		return this.punching2;
	} else if (this.punching3) {
		return this.punching3;
	} else if (this.kicking) {
		return this.kicking;
	} else if (this.kicking2) {
		return this.kicking2;
	} else {
		return false;
	}
}


Frieza.prototype.attackHandler = function(other, mult) {
	if (!this.isBot) {
		mult *= 4;
	} else {
		mult *= 2;
	}
	if (this.currentAnimation === this.punchRightAnimation
		|| this.currentAnimation === this.punchLeftAnimation) {
		other.healthBar.hp -= 0.05 * mult;
	} else if (this.currentAnimation === this.punchRight2Animation
		|| this.currentAnimation === this.punchLeft2Animation) {
		other.healthBar.hp -= 0.05 * mult;
	} else if (this.currentAnimation === this.punchRight3Animation
		|| this.currentAnimation === this.punchLeft3Animation) {
		other.healthBar.hp -= 0.0625 * mult;		
	} else if (this.currentAnimation === this.kickRightAnimation
		|| this.currentAnimation === this.kickLeftAnimation) {
		other.healthBar.hp -= 0.05 * mult;	
	} else if (this.currentAnimation === this.kickRight2Animation
		|| this.currentAnimation === this.kickLeft2Animation) {
		other.healthBar.hp -= 0.05 * mult;
	} else if (this.currentAnimation === this.uppercutRightAnimation
		|| this.currentAnimation === this.uppercutLeftAnimation) {
		other.healthBar.hp -= 0.09 * mult;
	}
	
		other.gettingAttacked = true;
	
}

//Draws current frame of current animation.
Frieza.prototype.draw = function(ctx, xView, yView) {
	if (!this.isBot) {
		this.healthBar.draw(ctx);
		this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x - xView, this.y - yView, this.scaleBy);
	} else {
		this.healthBar.draw(ctx);
		this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x - xView, this.y - yView, this.scaleBy);
	}
	Entity.prototype.draw.call(this);
}
