/*
Jump is buggy right now. Fix is coming thou.
*/


/*Animation(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration,
	frames, loop, reverse, saveLast, readyFrames)*/
/*
	For reverse: startX = OverallSpriteWidth - regularStartX - (frameWidth * frames).
*/
function Goku(game, x, y) {
	this.gettingAttackedCounter = 0;
	this.charged = false;
	this.gameover = false;
	/**
	 *     this.name = "Gokku";
    //this.animation = new Animation(AM.getAsset("./img/RobotGokku.png"), 0, 0, 206, 110, 0.02, 30, true, true);
   // (spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse)
   this.animation = new Animation(AM.getAsset("./img/GokuSS.png"), 3, 390, 96, 158, .2, 6, true, false, false, null);
   this.kickAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 0, 2383, 163, 158,.1, 6, false, false, false, null);
   this.jumpAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 0, 1415, 108, 162, .1, 8, false, false, false, null);
   this.leftAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 0, 1710, 140, 120, .2, 3, false, false, false, null);
   this.rightAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 0, 1840, 114, 143, .2, 3, false, false, false, null);
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
	//this.charged = false;
	this.name = "Goku";
	this.velocity = { x: 200, y: 50 };
	this.healthBar = new HealthBar(100, this.game,20, 20);
    

	/*
	This are the ready frames for some animations. Some animations have different frame width
	for each frame, so it was easier to use the array of frames for each animation.
	*/
	this.crouchFrames = [new Frame(3, 1585, 103, 115), new Frame(106, 1585, 103, 115),
							new Frame(209, 1585, 103, 115)];
	this.crouchFramesB = [new Frame(3, 1235, 106, 105), new Frame(109, 1235, 106, 105),
								new Frame(215, 1235, 106, 105)];

	this.punchFrames = [new Frame(15, 322, 57, 128), new Frame(73, 322, 62, 128),
							 new Frame(139, 322, 77, 128), new Frame(139, 322, 77, 128)];
	this.punchFrames2 = [new Frame(243, 322, 57, 128), new Frame(302, 322, 60, 128),
							new Frame(368, 322, 76, 128)];
	this.punchFrames3 = [new Frame(3, 3537 , 149, 120), new Frame(152, 3537 , 149, 120),
							new Frame(301, 3537 , 149, 120),new Frame(450, 3537 , 149, 120)];

	this.kickFrames = [new Frame(14, 603, 58, 128), new Frame(70, 603, 58, 128),
						new Frame(126, 603, 46, 128), new Frame(172, 603, 61, 128),
						  new Frame(238, 603, 82, 128), new Frame(238, 603, 82, 128),
						  new Frame(238, 603, 82, 128), new Frame(323, 603, 72, 128),
						  new Frame(172, 603, 61, 128)];

	this.kickFrames2 = [new Frame(14, 603, 58, 128), new Frame(70, 603, 58, 128),
						new Frame(126, 603, 46, 128), new Frame(172, 603, 61, 128),
						  new Frame(648, 603, 85, 128), new Frame(648, 603, 85, 128),
						  new Frame(648, 603, 85, 128), new Frame(323, 603, 72, 128),
						  new Frame(172, 603, 61, 128)];

	this.blockFrames = [new Frame(3, 1015, 98, 132), new Frame(101, 1015, 98, 132),
						new Frame(199, 1015, 98, 132)];

	this.blockFramesB = [new Frame (3, 705, 98, 120),new Frame (101, 705, 98, 120), new Frame (199, 705, 98, 120) ];



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

		this.gettingAttackedFrames = [new Frame(3, 6218 , 102, 142),new Frame(105, 6218 , 102, 142),
			new Frame(207, 6218 , 102, 142),new Frame(309, 6218 , 102, 142), new Frame(3, 6365 , 110, 138),
			new Frame(113, 6365 , 110, 138), new Frame(3, 6510 , 85, 128), new Frame(88, 6510 , 85, 128)]
		
		this.knockBackFrames = [new Frame(3, 6960 , 146, 105), new Frame(149, 6960 , 146, 105),
			new Frame(295, 6960 , 146, 105), new Frame(441, 6960 , 146, 105),
			new Frame(3, 7350 , 155, 105),new Frame(158, 7350 , 155, 105),
			new Frame(313, 7350 , 155, 105),new Frame(468, 7350 , 155, 105),new Frame(623, 7350 , 155, 105),
			new Frame(778, 7350 , 155, 105),new Frame(933, 7350 , 155, 105)]

		this.dyingFrames = [new Frame(3, 6960 , 146, 105), new Frame(149, 6960 , 146, 105),
				new Frame(295, 6960 , 146, 105), new Frame(295, 6960 , 146, 105),
				new Frame(295, 6960 , 146, 105),new Frame(295, 6960 , 146, 105),
				new Frame(295, 6960 , 146, 105)]

	//Actual width of Goku?
	this.actualWidth = 110;

	this.actualHeight = 125;

	this.knockBackRightAnimation = new Animation(AM.getAsset("./img/GokuSSReverse.png"), 3, 6960 , 146, 105, .2, this.knockBackFrames.length, false, true, false, this.knockBackFrames);

	this.knockBackLeftAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 3, 6960 , 146, 105, .2, this.knockBackFrames.length, false, false, false, this.knockBackFrames);

	this.dyingAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 3, 6960 , 146, 105, .2, this.dyingFrames.length, false, false, false, this.dyingFrames);
	
	//this.idleAnimation = new Animation(AM.getAsset("./img/GokuSS2.png"), 3, 390, 96, 158, .2, this.powerupFrames.length, false, false, true, this.powerupFrames);

	this.idleAnimationB = new Animation(AM.getAsset("./img/GokuSS2Reverse.png"), 2585, 885, 110, 125, .2, 3, true, true, false, null);
	
	//this.idleAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 3, 7350 , 155, 105, .2, 7, true, false, false, null);
	//this.idleAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 3, 6960 , 146, 105, .2, this.knockBackFrames.length, true, false, false, this.knockBackFrames);
	this.idleAnimation = new Animation(AM.getAsset("./img/GokuSSReverse.png"), 1522, 585, 110, 110, .2, 3, true, true, false, null);
	this.chargeAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 0, 1710, 104, 155, .2, this.chargeFramesB.length, false, false, false, this.chargeFramesB);
	this.chargeAnimationLeft = new Animation(AM.getAsset("./img/GokuSSReverse.png"), 0, 1710, 104, 155, .2, this.chargeFramesB.length, false, true, false, this.chargeFramesB);
	this.idleLeftAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 0, 585, 110, 110, .2, 3, true, false, false, null);
	this.moveAnimation = new Animation(AM.getAsset("./img/GokuSSReverse.png"),1628, 1350, 148, 120, .2, 3, false, true, false, null);
	//For reverse: startX = OverallSpriteWidth - regularStartX - (frameWidth * frames).
	this.moveLeftAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 0, 1350, 148, 120, .2, 3, false, false, false, null);
	this.crouchAnimation = new Animation(AM.getAsset("./img/GokuSSReverse.png"),
	3, 1235, 106, 105, .1, 3, false,  true, true, this.crouchFramesB);
	
	this.crouchLeftAnimation = new Animation(AM.getAsset("./img/GokuSS.png"),
	3, 1235, 106, 105, .1, 3, false,  false, true, this.crouchFramesB);
	

	this.punchRightAnimation = new Animation(AM.getAsset("./img/GokuSSReverse.png"), 1631, 1870, 147, 120, .1, 3, false, true, false, null);

	this.punchLeftAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 3, 1870, 147, 120, .1, 4, false, false, false, null);
   //For reverse: startX = OverallSpriteWidth - regularStartX - (frameWidth * frames).
	this.punchRight3Animation = new Animation(AM.getAsset("./img/GokuSSReverse.png"), 3, 3537 , 149, 120, .1, this.punchFrames3.length, false, true, false, this.punchFrames3);

	this.punchLeft3Animation = new Animation(AM.getAsset("./img/GokuSS.png"), 3, 3537 , 149, 120, .1, this.punchFrames3.length, false, false, false, this.punchFrames3);

	this.punchRight2Animation = new Animation(AM.getAsset("./img/GokuSSReverse.png"), 1495, 4138, 140, 118, .1, 2, false, true, false, null);

	this.punchLeft2Animation = new Animation(AM.getAsset("./img/GokuSS.png"), 303, 4138, 140, 118, .1, 2, false, false, false, null);
	//For reverse: startX = OverallSpriteWidth - regularStartX - (frameWidth * frames).
	this.kickRightAnimation = new Animation(AM.getAsset("./img/GokuSSReverse.png"), 1094, 1990, 163, 150, .1, 6, false, true, false, null);

	this.kickLeftAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 0, 1990, 163, 150, .1, 6, false, false, false, null);

	this.kickRight3Animation =  new Animation(AM.getAsset("./img/GokuSSReverse.png"), 1112, 4268 , 160, 150, .1, 6, false, true, false, null);
	this.kickLeft3Animation =new Animation(AM.getAsset("./img/GokuSS.png"), 3, 4268 , 160, 150, .1, 6, false, false, false, null);

	this.kickLeft2Animation = new Animation(AM.getAsset("./img/GokuSS.png"), 3, 4268 , 160, 150, .1, 6, false, false, false, null);
	this.kickRight2Animation = new Animation(AM.getAsset("./img/GokuSSReverse.png"), 1112, 4268 , 160, 150, .1, 6, false, true, false, null);

	//this.kickRight3Animation = new Animation(AM.getAsset("./img/GokuSS.png"), 3, 4778 , 160, 150, .1, 6, false, false, false, null);

	this.blockRightAnimation = new Animation(AM.getAsset("./img/GokuSSReverse.png"), 3, 1015, 98, 132, .2, 3, false,true, true, this.blockFramesB);

	this.blockLeftAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 3, 1015, 98, 132, .2, 3, false,false, true, this.blockFramesB);

	this.blockCrouchRightAnimation = new Animation(AM.getAsset("./img/GokuSSReverse.png"), 1821, 830, 82.5, 100, .2, 3, false,true, true, null);

	this.blockCrouchLeftAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 3, 830, 82.5, 100, .2, 3, false,false, true, null);

	this.jumpLeftAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 0, 1070, 107, 162, .1, 8, false, false, false, null);
	this.jumpRightAnimation = new Animation(AM.getAsset("./img/GokuSSReverse.png"), 1214, 1070, 107, 162, .1, 8, false, true, false, null);

	this.jumpKickRightAnimation = new Animation(AM.getAsset("./img/GokuSSReverse.png"), 1208, 1415, 108, 162, .1, 8, false, true, false, null);

	this.jumpKickLeftAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 0, 1415, 108, 162, .1, 8, false, false, false, null);
	this.uppercutRightAnimation = new Animation(AM.getAsset("./img/GokuSSReverse.png"), 1382, 3668 , 115, 170, .1, 6, false, true, false, null);

	this.uppercutLeftAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 3, 3668 , 115, 170, .1, 6, false, false, false, null);

	this.attackedLeftAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 3, 6510 , 85, 128, .2, this.gettingAttackedFrames.length, false, false, false, this.gettingAttackedFrames);
	this.attackedRightAnimation = new Animation(AM.getAsset("./img/GokuSSReverse.png"), 3, 6510 , 85, 128, .2, this.gettingAttackedFrames.length, false, true, false, this.gettingAttackedFrames);


//this.idleAnimationB = new Animation(AM.getAsset("./img/GokuSS.png"), 3, 885, 110, 125, .2, 3, true, false, false, null);
	//this.idleAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 3, 390, 96, 158, .2, this.powerupFrames.length, true, false, false, this.powerupFrames);
	this.chargeAnimationB = new Animation(AM.getAsset("./img/GokuSS2.png"), 3, 390, 96, 158, .2, this.powerupFrames.length, false, false, false, this.powerupFrames);
	this.chargeAnimationBLeft = new Animation(AM.getAsset("./img/GokuSS2Reverse.png"), 3, 390, 96, 158, .2, this.powerupFrames.length, false, true, false, this.powerupFrames);
	this.idleLeftAnimationB = new Animation(AM.getAsset("./img/GokuSS2.png"), 3, 885, 110, 125, .2, 3, true, false, false, null);
	this.moveAnimationB = new Animation(AM.getAsset("./img/GokuSS2Reverse.png"), 2498, 1710, 140, 120, .2, 3, false, false, false, null);
	//For reverse: startX = OverallSpriteWidth - regularStartX - (frameWidth * frames)
	this.moveLeftAnimationB = new Animation(AM.getAsset("./img/GokuSS2.png"), 0, 1710, 140, 120, .2, 3, false, false, false, null);
	this.crouchAnimationB = new Animation(AM.getAsset("./img/GokuSS2Reverse.png"),
		1550, 23, 57.5, 128, 0.10, 3, false,  true, true, this.crouchFrames);
	
	this.crouchLeftAnimationB = new Animation(AM.getAsset("./img/GokuSS2.png"),
		984, 23,  57.5, 128, 0.10, 3, false,  false, true, this.crouchFrames);
	

	this.punchRightAnimationB = new Animation(AM.getAsset("./img/GokuSS2Reverse.png"), 2327, 2255, 147, 125, .1, 4, false, true, false, null);

	this.punchLeftAnimationB = new Animation(AM.getAsset("./img/GokuSS2.png"), 3, 2255, 147, 125, .1, 4, false, false, false, null);

	this.punchRight3AnimationB = new Animation(AM.getAsset("./img/GokuSS2Reverse.png"), 2343, 4647 , 143, 120, .1, 4, false, true, false, null);

	this.punchLeft3AnimationB = new Animation(AM.getAsset("./img/GokuSS2.png"), 3, 4647 , 143, 120, .1, 4, false, false, false, null);

	this.punchRight2AnimationB = new Animation(AM.getAsset("./img/GokuSS2Reverse.png"), 2315, 4038, 150, 134, .1, 2, false, true, false, null);

	this.punchLeft2AnimationB = new Animation(AM.getAsset("./img/GokuSS2.png"), 303, 4038, 150, 134, .1, 2, false, false, false, null);

	this.kickRightAnimationB = new Animation(AM.getAsset("./img/GokuSS2Reverse.png"), 1940, 2383, 163, 158,.1, 6, false, true, false, null);

	this.kickLeftAnimationB = new Animation(AM.getAsset("./img/GokuSS2.png"), 0, 2383, 163, 158,.1, 6, false, false, false, null);

	this.kickRight3AnimationB = new Animation(AM.getAsset("./img/GokuSS2Reverse.png"), 1955, 4778 , 160, 150, .1, 6, false, true, false, null);
	this.kickLeft3AnimationB = new Animation(AM.getAsset("./img/GokuSS2.png"), 3, 4778 , 160, 150, .1, 6, false, false, false, null);

	this.kickLeft2AnimationB = new Animation(AM.getAsset("./img/GokuSS2.png"), 3, 4485, 102, 150, .2, 4, false, false, false, null);
	this.kickRight2AnimationB = new Animation(AM.getAsset("./img/GokuSS2Reverse.png"), 2507, 4485, 102, 150, .2, 4, false, true, false, null);

	//this.kickRight3AnimationB = new Animation(AM.getAsset("./img/GokuSS2.png"), 3, 4778 , 160, 150, .1, 6, false, false, false, null);

	this.blockRightAnimationB = new Animation(AM.getAsset("./img/GokuSS2Reverse.png"), 3, 1015, 98, 132, .2, this.blockFrames.length, false,true, true, this.blockFrames);

	this.blockLeftAnimationB = new Animation(AM.getAsset("./img/GokuSS2.png"), 3, 1015, 98, 132, .2, this.blockFrames.length, false,false, true, this.blockFrames);

	this.blockCrouchRightAnimationB = new Animation(AM.getAsset("./img/GokuSS2Reverse.png"), 2666, 1150, 83, 115, .2, 3, false, true, true, null);

	this.blockCrouchLeftAnimationB = new Animation(AM.getAsset("./img/GokuSS2.png"), 3, 1150, 83, 115, .2, 3, false, false, true, null);

	this.jumpRightAnimationB = new Animation(AM.getAsset("./img/GokuSS2Reverse.png"), 2054, 1415, 108, 162, .1, 8, false, true, false, null);
	this.jumpLeftAnimationB = new Animation(AM.getAsset("./img/GokuSS2.png"), 0, 1415, 108, 162, .1, 8, false, false, false, null);

	this.jumpKickRightAnimationB = new Animation(AM.getAsset("./img/GokuSS2.png"), 0, 1415, 108, 162, .1, 8, false, false, false, null);

	this.jumpKickLeftAnimationB = new Animation(AM.getAsset("./img/GokuSS.png"), 0, 1415, 108, 162, .1, 8, false, false, false, null);
	this.uppercutRightAnimationB = new Animation(AM.getAsset("./img/Goku.png"),
		14, 907, 58, 128, 0.1, this.uppercutFrames.length, false, false, false, this.uppercutFrames);

	this.uppercutLeftAnimationB = new Animation(AM.getAsset("./img/GokuReverse.png"),
		14, 907, 58, 128, 0.1, this.uppercutFrames.length, false, true, false, this.uppercutFrames);

	this.attackedRightAnimationB = new Animation(AM.getAsset("./img/GokuSS.png"), 3, 6778 , 102, 140, .2, 4, false, false, false, null);
	this.attackedLeftAnimationB = new Animation(AM.getAsset("./img/GokuSS.png"), 3, 6778 , 102, 140, .2, 4, false, false, false, null);
	this.animationCollection = [this.idleAnimation, this.idleLeftAnimation,
		this.moveAnimation, this.moveLeftAnimation, this.crouchAnimation,
		this.crouchLeftAnimation, this.blockRightAnimation,
		this.blockLeftAnimation, this.blockCrouchRightAnimation,
		this.blockCrouchLeftAnimation, this.punchRightAnimation,
		this.punchLeftAnimation, this.punchRight2Animation, this.punchLeft2Animation,
		this.punchRight3Animation, this.punchLeft3Animation, this.kickRightAnimation,
		this.kickLeftAnimation, this.kickRight2Animation, this.kickLeft2Animation,
		this.jumpRightAnimation, this.jumpLeftAnimation, this.jumpKickRightAnimation,
		this.jumpKickLeftAnimation, this.uppercutRightAnimation, this.uppercutLeftAnimation,
		this.attackedRightAnimation, this.attackedLeftAnimation,this.idleAnimationB, this.idleLeftAnimationB,
		this.moveAnimationB, this.moveLeftAnimationB, this.crouchAnimationB,
		this.crouchLeftAnimationB, this.blockRightAnimationB,
		this.blockLeftAnimationB, this.blockCrouchRightAnimationB,
		this.blockCrouchLeftAnimationB, this.punchRightAnimationB,
		this.punchLeftAnimationB, this.punchRight2AnimationB, this.punchLeft2AnimationB,
		this.punchRight3AnimationB, this.punchLeft3AnimationB, this.kickRightAnimationB,
		this.kickLeftAnimationB, this.kickRight2AnimationB, this.kickLeft2AnimationB,
		this.jumpRightAnimationB, this.jumpLeftAnimationB, this.jumpKickRightAnimationB,
		this.jumpKickLeftAnimationB, this.uppercutRightAnimationB, this.uppercutLeftAnimationB,
		this.attackedRightAnimationB, this.attackedLeftAnimationB,this.kickLeft3Animation,this.kickRight3Animation];
//this.charged = true;
for (var i = 0; i < this.animationCollection.length; i++) {
	//console.log(i);
	this.animationCollection[i].actualWidth = 110;
	this.animationCollection[i].actualHeight = 125;
}

this.kickLeft3Animation.actualWidth = 150;
this.kickRight3Animation.actualHeight = 150;

	this.currentAnimation = this.idleLeftAnimationB;
	//Goku's movement speed.
	this.speed = 5;
	
	

	
	
	//Goku's states.
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
    this.scaleBy = 2;
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

Goku.prototype = new Entity();
Goku.prototype.constructor = Goku;

//Updates Goku's state (frame).
/*Current bugs (features) :
1) If you press crouch and punch while jumping, then
Goku will uppercut when lands.
*/
var ki = 0;
var energy = 0;
var count = 0;
var count2 = 0
// Goku.prototype.update = function() {
// 	if(this.gettingAttacked) {
// 		this.gettingAttackedCounter++;
// 	}
// 	console.log(this.healthBar.hp)
	

// 	if (this.healthBar.hp <= 0) {
// 		console.log("DEAD")
// 		this.currentAnimation = this.dyingAnimation;
// 		this.healthBar.hp = 0;
// 		if (this.dyingAnimation.isDone()) {
// 			if (!this.gameover) {
// 				this.game.addEntity(new GameOver(this.game, this.game.xView, this.game.yView));
// 				this.gameover = true;
// 			}
// 			this.removeFromWorld = true;
// 		}
// 	} else {

	

	 

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
// 		} else if (this.game.punch) {
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
// 		}*/
		
	
// 		if (this.punching) {
// 			if (this.facing === "R") {
// 				if(this.charged) {
// 					this.currentAnimation = this.punchRightAnimationB;
// 				if(this.punchRightAnimationB.elapsedTime > .2){
// 					punchsnd.play();
// 				}
// 				if (this.punchRightAnimationB.isDone()) {
// 					this.punchRightAnimationB.elapsedTime = 0;
// 					this.punching = false;
// 					this.game.punch = null;
// 				}
// 				} else {
// 					this.currentAnimation = this.punchRightAnimation;
// 					if(this.punchRightAnimation.elapsedTime > .2){
// 						punchsnd.play();
// 					}
// 					if (this.punchRightAnimation.isDone()) {
// 						this.punchRightAnimation.elapsedTime = 0;
// 						this.punching = false;
// 						this.game.punch = null;
// 					}
// 			}
				
// 			} else if (this.facing === "L") {
// 				if(this.charged) {
// 					if (this.punchLeftAnimationB.isDone()) {
// 						this.punchLeftAnimationB.elapsedTime = 0;
// 						this.punching = false;
// 						this.game.punch = null;
// 					}
// 					this.currentAnimation = this.punchLeftAnimationB;
// 					if(this.punchLeftAnimationB.elapsedTime > .2){
// 						punchsnd.play();
// 					}
// 				}
// 				else {
// 					if (this.punchLeftAnimation.isDone()) {
// 						this.punchLeftAnimation.elapsedTime = 0;
// 						this.punching = false;
// 						this.game.punch = null;
// 					}
// 					this.currentAnimation = this.punchLeftAnimation;
// 					if(this.punchLeftAnimation.elapsedTime > .2){
// 						punchsnd.play();
// 					}
// 				}
// 			}
// 		} else if (this.punching2) {
// 			if (this.facing === "R") {
// 				if(this.charged) {
// 					this.currentAnimation = this.punchRight2AnimationB;
// 				if(this.punchRight2Animation.elapsedTime > .2){
// 					punchsnd.play();
// 				}
// 				if (this.punchRight2AnimationB.isDone()) {
// 					this.punchRight2AnimationB.elapsedTime = 0;
// 					this.punching2 = false;
// 					this.game.punch2 = null;
// 				}
// 				} else {
// 					this.currentAnimation = this.punchRight2Animation;
// 				if(this.punchRight2Animation.elapsedTime > .2){
// 					punchsnd.play();
// 				}
// 				if (this.punchRight2Animation.isDone()) {
// 					this.punchRight2Animation.elapsedTime = 0;
// 					this.punching2 = false;
// 					this.game.punch2 = null;
// 				}
// 				}
				
// 			} else if (this.facing === "L") {
// 				if(this.charged) {
// 					this.currentAnimation = this.punchLeft2AnimationB;
// 					if(this.punchLeft2AnimationB.elapsedTime > .2){
// 						punchsnd.play();
// 					}
// 					if (this.punchLeft2AnimationB.isDone()) {
// 						this.punchLeft2AnimationB.elapsedTime = 0;
// 						this.punching2 = false;
// 						this.game.punch2 = null;
// 					}
// 				}
// 				else {
// 					this.currentAnimation = this.punchLeft2Animation;
// 					if(this.punchLeft2Animation.elapsedTime > .2){
// 						punchsnd.play();
// 					}
// 					if (this.punchLeft2Animation.isDone()) {
// 						this.punchLeft2Animation.elapsedTime = 0;
// 						this.punching2 = false;
// 						this.game.punch2 = null;
// 					}
// 				}
// 			}
// 		} else if (this.punching3) {
// 			if (this.facing === "R") {
// 				if(this.charged) {
// 					this.currentAnimation = this.punchRight3AnimationB;
// 				if(this.punchRight3AnimationB.elapsedTime > .2){
// 					kicksnd.play();
// 				}
// 				if (this.punchRight3AnimationB.isDone()) {
// 					this.punchRight3AnimationB.elapsedTime = 0;
// 					this.punching3 = false;
// 					this.game.punch3 = null;
// 				}
// 				} else {
// 					this.currentAnimation = this.punchRight3Animation;
// 					if(this.punchRight3Animation.elapsedTime > .2){
// 						kicksnd.play();
// 					}
// 					if (this.punchRight3Animation.isDone()) {
// 						this.punchRight3Animation.elapsedTime = 0;
// 						this.punching3 = false;
// 						this.game.punch3 = null;
// 					}
// 				}
				
// 			} else if (this.facing === "L") {
// 				if(this.charged) {
// 					this.currentAnimation = this.punchLeft3AnimationB;
// 				if(this.punchLeft3Animation.elapsedTime > .2){
// 					kicksnd.play();
// 				}
// 				if (this.punchLeft3AnimationB.isDone()) {
// 					this.punchLeft3AnimationB.elapsedTime = 0;
// 					this.punching3 = false;
// 					this.game.punch3 = null;
// 				}
// 				} else {
// 					this.currentAnimation = this.punchLeft3Animation;
// 					if(this.punchLeft3Animation.elapsedTime > .2){
// 						kicksnd.play();
// 					}
// 					if (this.punchLeft3Animation.isDone()) {
// 						this.punchLeft3Animation.elapsedTime = 0;
// 						this.punching3 = false;
// 						this.game.punch3 = null;
// 					}
// 				}
// 			}
// 		} else if (this.kicking && !this.kicking2 && !this.kicking3) {
// 			if (this.facing === "R") {
// 				if(this.charged) {
// 					this.currentAnimation = this.kickRightAnimationB;
					
// 				if(this.kickRightAnimationB.elapsedTime > .4){
// 					kicksnd.play();
// 				}
// 				if (this.kickRightAnimationB.isDone()) {
					
// 					this.kickRightAnimationB.elapsedTime = 0;
// 					this.kicking = false;
// 					this.game.kick = false;
// 				}
// 				}
// 				else {
// 					this.currentAnimation = this.kickRightAnimation;
					
// 				if(this.kickRightAnimation.elapsedTime > .4){
// 					kicksnd.play();
// 				}
// 				if (this.kickRightAnimation.isDone()) {
// 					this.kickRightAnimation.elapsedTime = 0;
// 					this.kicking = false;
// 					this.game.kick = false;
// 				}
// 				}
// 			} else if (this.facing === "L") {
// 				if(this.charged) {
// 					this.currentAnimation = this.kickLeftAnimationB;
// 				if(this.kickLeftAnimationB.elapsedTime > .4){
// 					kicksnd.play();
// 				}
// 				if (this.kickLeftAnimationB.isDone()) {
// 					kicksnd.play()
// 					this.kickLeftAnimationB.elapsedTime = 0;
// 					this.kicking = false;
// 					this.game.kick = false;
// 				}
// 				} else {
// 					this.currentAnimation = this.kickLeftAnimation;
// 				if(this.kickLeftAnimation.elapsedTime > .4){
// 					kicksnd.play();
// 				}
// 				if (this.kickLeftAnimation.isDone()) {
// 					kicksnd.play()
// 					this.kickLeftAnimation.elapsedTime = 0;
// 					this.kicking = false;
// 					this.game.kick = false;
// 				}
// 				}
				
// 			}
// 		} else if(this.kicking2 && !this.kicking3) {
// 			if (this.facing === "R") {
// 				if(this.charged) {
// 					this.kicking = false;
// 				this.currentAnimation = this.kickRight2AnimationB;
// 				if(this.kickRight2AnimationB.elapsedTime > .2){
// 					hitsnd.play();
// 				}
// 				if (this.kickRight2AnimationB.isDone()) {
// 					this.kickRight2AnimationB.elapsedTime = 0;
					
					
// 					this.kicking2 = false;
// 					this.game.kick2 = null;
// 				}
// 				} else {
// 					this.kicking = false;
// 				this.currentAnimation = this.kickRight2Animation;
// 				if(this.kickRight2Animation.elapsedTime > .2){
// 					hitsnd.play();
// 				}
// 				if (this.kickRight2Animation.isDone()) {
// 					this.kickRight2Animation.elapsedTime = 0;
					
					
// 					this.kicking2 = false;
// 					this.game.kick2 = null;
// 				}
// 				}
// 			} else if (this.facing === "L") {
// 				if(this.charged) {
// 					this.kicking = false;
// 				this.currentAnimation = this.kickLeft2AnimationB;
// 				if(this.kickLeft2AnimationB.elapsedTime > .2){
// 					hitsnd.play();
// 				}
// 				if (this.kickLeft2AnimationB.isDone()) {
// 					this.kickLeft2AnimationB.elapsedTime = 0;
// 					this.kicking2 = false;
// 					this.game.kick2 = false;
// 				}
// 				} else {
// 					this.kicking = false;
// 				this.currentAnimation = this.kickLeft2Animation;
// 				if(this.kickLeft2Animation.elapsedTime > .2){
// 					hitsnd.play();
// 				}
// 				if (this.kickLeft2Animation.isDone()) {
// 					this.kickLeft2Animation.elapsedTime = 0;
// 					this.kicking2 = false;
// 					this.game.kick2 = false;
// 				}
// 				}
// 			}
// 		} else if(this.kicking3) {
// 				if (this.facing === "R") {
// 					if(this.charged) {
// 						this.kicking2 = false;
// 					this.currentAnimation = this.kickRight3AnimationB;
// 					if(this.kickRight3AnimationB.elapsedTime > .2){
// 						hitsnd.play();
// 					}
// 					if (this.kickRight3AnimationB.isDone()) {
// 						this.kickRight3AnimationB.elapsedTime = 0;
						
						
// 						this.kicking3 = false;
// 						this.game.kick3 = false;
// 					}
// 					} else {
// 						this.kicking2 = false;
// 					this.currentAnimation = this.kickRight3Animation;
					
// 					if(this.kickRight3Animation.elapsedTime > .2){
// 						hitsnd.play();
						
// 					}
// 					if (this.kickRight3Animation.isDone()) {
// 						this.kickRight3Animation.elapsedTime = 0;
						
						
// 						this.kicking3 = false;
// 						this.game.kick3 = false;
// 					}
// 					}
// 				} else if (this.facing === "L") {
// 					if(this.charged) {
// 						this.kicking = false;
// 					this.currentAnimation = this.kickLeft3AnimationB;
					
// 					if(this.kickLeft3AnimationB.elapsedTime > .2){
// 						hitsnd.play();
						
// 					}
// 					if (this.kickLeft3AnimationB.isDone()) {
// 						this.kickLeft3AnimationB.elapsedTime = 0;
// 						this.kicking3 = false;
// 						this.game.kick3 = false;
// 					}
// 					} else {
// 						this.kicking = false;
// 					this.currentAnimation = this.kickLeft3Animation;
					
// 					if(this.kickLeft3Animation.elapsedTime > .2){
// 						hitsnd.play();
						
						
// 					}

// 					if (this.kickLeft3Animation.isDone()) {
						
// 						this.kickLeft3Animation.elapsedTime = 0;
// 						this.kicking3 = false;
// 						this.game.kick3 = false;
					
// 					}
// 					}
// 				}
			
// 		} else if (this.charging) {
// 			if(ki%100 == 0) {
// 				energy ++;
// 			}
// 			ki++;
			
			
// 			//this.charged = true;
// 			console.log("ENERGY: "+ energy);
// 			if(this.facing == "L" && this.charged == false) {
// 				this.currentAnimation = this.chargeAnimation;
// 			} 
// 			if (this.facing == "R" && this.charged == false) {
// 				this.currentAnimation = this.chargeAnimationLeft;
// 			}
// 			//this.currentAnimation = this.chargeAnimation;
// 			if(this.currentAnimation.isDone()) {
// 				//this.currentAnimation.elapsedTime = 0;
// 				this.charging = false;
// 				//this.game.charge = null;
// 			}
// 		}else if (this.jumping) {
// 			if (this.facing === "R") {
// 				if(this.charged) {
// 					if (this.jumpKicking) {
// 						this.currentAnimation = this.jumpRightAnimationB;
// 					} else {
// 						this.currentAnimation = this.jumpRightAnimationB;
// 							jumpsnd.play();
						
// 					}
// 				} else {
// 					if (this.jumpKicking) {
// 						this.currentAnimation = this.jumpRightAnimation;
// 					} else {
// 						this.currentAnimation = this.jumpRightAnimation;
// 							jumpsnd.play();
						
// 					}
// 				}

// 				if (this.currentAnimation.isDone()) {
// 					this.jumpRightAnimation.readyFrames = null;
// 					this.jumpKickRightAnimation.elapsedTime = 0;
// 					this.jumpRightAnimation.elapsedTime = 0;
// 					this.jumpRightAnimationB.readyFrames = null;
// 					//this.jumpKickRightAnimationB.elapsedTime = 0;
// 					this.jumpRightAnimationB.elapsedTime = 0;
// 					this.jumping = false;
// 					this.jumpKicking = false;
// 					this.game.jumpKick = null;
// 					this.game.jump = null;
// 				}
// 				console.log("Gokus move right " +  this.movingRight);
// 				if (this.movingRight && this.x < 3720 && this.gettingAttacked == false) {
// 					this.x += this.speed;
// 				}

// 				if ((this.x < 640) || (this.x > 3200 && this.x < 3720)) {
// 					this.xView += this.speed;
// 				}
// 			} else if (this.facing === "L") {
// 				if(this.charged) {
// 					if (this.jumpKicking) {
// 						this.currentAnimation = this.jumpRightAnimationB;
// 					} else {
// 						this.currentAnimation = this.jumpLeftAnimationB;
// 						jumpsnd.play();
// 					}
// 				}
// 				else {
// 					if (this.jumpKicking) {
// 						this.currentAnimation = this.jumpRightAnimation;
// 					} else {
// 						this.currentAnimation = this.jumpLeftAnimation;
// 						jumpsnd.play();
// 					}
// 				}
// 				if (this.currentAnimation.isDone()) {
// 					this.jumpLeftAnimation.readyFrames = null;
// 					this.jumpLeftAnimation.elapsedTime = 0;
// 					this.jumpKickLeftAnimation.elapsedTime = 0;
// 					this.jumpLeftAnimationB.readyFrames = null;
// 					this.jumpLeftAnimationB.elapsedTime = 0;
// 					//this.jumpKickLeftAnimation.elapsedTime = 0;
// 					this.jumpKicking = false;
// 					this.jumping = false;
// 					this.game.jumpKick = null;
// 					this.game.jump = null;
// 				}
// 				if (this.movingLeft && this.x >= 0 && this.gettingAttacked == false) {
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
// 		} else if (this.movingRight && this.gettingAttacked == false) {
// 			if(this.charged) {
// 				this.currentAnimation = this.moveAnimationB;
// 			if (this.moveAnimationB.isDone()) {
// 				this.moveAnimationB.elapsedTime = 0;
//                 if(this.movingRight) {
				

//                     //this.moveLeftAnimation.elapsedTime = .2;
//                 } 
//                 else {
                
//                 this.movingLeft = false;
//                 this.game.moveLeft = null;
// 				}
// 			}
// 			}else {
// 				this.currentAnimation = this.moveAnimation;
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
// 		}

// 			if ((this.x < 3720)) {
// 				this.x += this.speed;
// 			}	

// 			if ((this.x < 640) || (this.x > 3200 && this.x < 3720)) {
// 				this.xView += this.speed;
// 			}
			
			
// 		} else if (this.movingLeft) {
//             if(this.charged) {
// 				this.currentAnimation = this.moveLeftAnimationB;
//             if (this.moveLeftAnimationB.isDone()) {
// 				this.moveLeftAnimationB.elapsedTime = 0;
//                 if(this.movingLeft) {
				

//                     //this.moveLeftAnimation.elapsedTime = .2;
//                 } 
//                 else {
                
//                 this.movingLeft = false;
//                 this.game.moveLeft = null;
//                 }
                
//             }
// 			} else {
// 				this.currentAnimation = this.moveLeftAnimation;
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
// 			}

// 			if (this.x >= 0) {
// 				this.x += -1 * (this.speed);
// 			}

// 			if ((this.x >= 0 && this.x < 640) || (this.x > 3200 && this.x < 3720)) {
// 				this.xView += -1 * (this.speed);
// 			}
// 		} else  if (this.crouching == true && this.gettingAttacked == false) {
// 			if(this.charged) {
// 				if (this.facing === "R") {
// 					this.currentAnimation = this.crouchAnimationB;
					
// 						ducksnd.play();
					
// 				} else {
// 					if (this.uppercutting) {
						
// 					} else {
// 						this.currentAnimation = this.crouchLeftAnimationB;
						
// 							ducksnd.play();
						
// 					}
// 				}
// 			} else {
// 				if (this.facing === "R") {
// 					this.currentAnimation = this.crouchAnimation;
					
// 						ducksnd.play();
					
// 				} else {
// 					if (this.uppercutting) {
						
// 					} else {
// 						this.currentAnimation = this.crouchLeftAnimation;
						
// 							ducksnd.play();
						
// 					}
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
// 					this.currentAnimation = this.idleLeftAnimationB;
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
// 		console.log("Blocking " + this.blocking);
// 		console.log("Facing" + (this.facing == "R") )
// 	} else if (this.blocking) {
// 		if (this.facing == "R") {
// 			if(this.charged) {
// 				if (this.crouching) {
// 					this.currentAnimation = this.blockCrouchRightAnimationB;
// 				} else {
// 					this.currentAnimation = this.blockRightAnimationB;
// 				}
// 			} else {
// 				if (this.crouching) {
// 					this.currentAnimation = this.blockCrouchRightAnimationB;
// 				} else {
// 					this.currentAnimation = this.blockRightAnimationB;
// 				}
// 			}
// 		 }else {
// 			 if(this.charged) {
// 				if (this.crouching) {
// 					this.currentAnimation = this.blockCrouchLeftAnimationB;
// 				} else {
// 					this.currentAnimation = this.blockLeftAnimationB;
// 				}
// 			 } else {
// 				if (this.crouching) {
// 					this.currentAnimation = this.blockCrouchLeftAnimation;
// 				} else {
// 					this.currentAnimation = this.blockLeftAnimation;
// 				}
// 			 }
				
// 			}
			
// 	} else {
// 		console.log(this.gettingAttackedCounter)
// 		if (this.gettingAttackedCounter >= 50) {
			
// 			this.currentAnimation = this.facing === "L" ? this.knockBackLeftAnimation : this.knockBackRightAnimation;
// 			if (this.x > 10 && this.x < 3700) {
// 				this.x += this.facing === 'L' ? 5 : -5;
// 			}
// 			if (this.currentAnimation.isDone()) {
// 				this.gettingAttacked = false;
// 				this.gettingAttackedCounter = 0;
// 				this.knockBackLeftAnimation.elapsedTime = 0;
// 				this.knockBackRightAnimation.elapsedTime = 0;
// 			}
// 		} else {
// 			 this.currentAnimation = this.facing === "L" ? this.attackedLeftAnimation : this.attackedRightAnimation;
// 			 if (this.currentAnimation.isDone()) {
// 				 this.currentAnimation.elapsedTime = 0;
// 				 this.gettingAttacked = false;
// 				 //this.currentAnimation = this.facing === "L" ? this.idleLeftAnimation : this.idleAnimation;
// 			 }
// 		 }
// 	 }	
	
		
//         //this.currentAnimation.elapsedTime = 0;
// 		// if (!this.gettingAttacked) {
// 		// 	var next = Math.random();
			
// 		// 		this.currentAnimation = this.facing === "L" ? this.idleLeftAnimation : this.idleAnimation;
// 		// }
// 	if(energy > 5 && this.charged == false) {
// 		if(this.facing = "L"){
// 			this.currentAnimation = this.chargeAnimationB;
// 		} else {
// 			this.currentAnimation = this.chargeAnimationBLeft;
// 		}
		
// 		if(this.chargeAnimationB.isDone()) {
// 			this.charging = false;
// 			this.currentAnimation = this.idleAnimationB;
// 			energy = 0;
// 			ki = 0;
// 			this.charged = true;
// 		}
		
// 	}
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

// 		if (this.blocking) {
// 			if (this.facing == "R") {
// 				if(this.charged) {
// 					if (this.crouching) {
// 						this.currentAnimation = this.blockCrouchRightAnimationB;
// 					} else {
// 						this.currentAnimation = this.blockRightAnimationB;
// 					}
// 				} else {
// 					if (this.crouching) {
// 						this.currentAnimation = this.blockCrouchRightAnimation;
// 					} else {
// 						this.currentAnimation = this.blockRightAnimation;
// 					}
// 				}
// 			 }else {
// 				 if(this.charged) {
// 					if (this.crouching) {
// 						this.currentAnimation = this.blockCrouchLeftAnimationB;
// 					} else {
// 						this.currentAnimation = this.blockLeftAnimationB;
// 					}
// 				 } else {
// 					if (this.crouching) {
// 						this.currentAnimation = this.blockCrouchLeftAnimation;
// 					} else {
// 						this.currentAnimation = this.blockLeftAnimation;
// 					}
// 				 }
					
// 				}
// 			}

// 	//Detect collision with other entities
// 	var range = 180
// 	if(count > 2000){
// 		count = 0;
// 	}
// 	for (var i = 0; i < this.game.entities.length; i++) {
// 		var ent = this.game.entities[i];
// 		if(!(this.isBot)){
// 				//console.log("COUNT "+count)

// 				//BOTS ATTACK LOGIC
// 				//Player on the right
// 				if (this.gettingAttackedCounter >= 500) {
						
// 					this.currentAnimation = this.facing === "L" ? this.knockBackLeftAnimation : this.knockBackRightAnimation;
// 					if (this.x > 10 && this.x < 3700) {
// 						this.x += this.facing === 'L' ? 2 : -2;
// 					}
// 					if (this.currentAnimation.isDone()) {
// 						this.gettingAttacked = false;
// 						this.gettingAttackedCounter = 0;
// 						this.knockBackLeftAnimation.elapsedTime = 0;
// 						this.knockBackRightAnimation.elapsedTime = 0;
// 					}
// 				}
// 				if (ent !== this && ent.currentBox && this.collide(ent)) {
// 					if(this.game.kick && this.currentAnimation.isDone()) {
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
// 						if(!this.isAttacking()){
							
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
// 									//this.gettingAttacked = true;
// 								}
// 								//console.log("Elapsed " + ent.game.clockTick);
// 								if(ent.currentAnimation.isDone()) {
// 									//console.log("I'm done kicking right");
// 									//rand = Math.floor(Math.random() * Math.floor(2))
// 								}
// 							}
// 							if(rand === 1){
// 								ent.currentAnimation = ent.punchRightAnimation;
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
// 								ent.isBlocking == true;
// 								if(ent.currentAnimation.isDone()) {
// 									ent.isBlocking = false;
// 									//rand = Math.floor(Math.random() * Math.floor(2))
// 								}
// 								this.gettingAttacked = false;
// 							}if (ent.currentAnimation == ent.kickRightAnimation||
// 								ent.currentAnimation == ent.punchRightAnimation) {
// 								 if (this.blocking) {
// 									if (this.facing === "R") {
// 										if (this.crouching) {
// 											this.currentAnimation = this.blockCrouchRightAnimation;
// 										} else {
// 											this.currentAnimation = this.blockRightAnimation;
											
// 										}
// 									} else {
// 										if (this.crouching) {
// 											this.currentAnimation = this.blockCrouchLeftAnimation;
// 										} else {
// 											this.currentAnimation = this.blockLeftAnimation;
// 										}
// 									}
// 								} else {
// 									this.gettingAttacked = true;
// 									 this.currentAnimation = this.facing === "L" ? this.attackedLeftAnimation : this.attackedRightAnimation;
// 									 if (this.currentAnimation.isDone()) {
								
// 										 this.currentAnimation.elapsedTime = 0;
// 										 this.gettingAttacked = false;
// 										 //this.currentAnimation = this.facing === "L" ? this.idleLeftAnimation : this.idleAnimation;
// 									 }
// 								 }	
// 							} else  if (this.blocking) {
// 								if (this.facing === "R") {
// 									if (this.crouching) {
					
// 										this.currentAnimation = this.blockCrouchRightAnimation;
										
// 									} else {
// 										this.currentAnimation = this.blockRightAnimation;
// 										if(this.blockRightAnimation.isDone()) {
// 											//this.blockRightAnimation.elapsedTime = this.blockRightAnimation.frameDuration+.1;
											
// 											//this.blockRightAnimation.elapsedTime = 0;
										
// 										}
// 									}
// 								} else {
// 									if (this.crouching) {
// 										this.currentAnimation = this.blockCrouchRightAnimation;
// 									} else {
// 										this.currentAnimation = this.blockRighAnimation;
// 										if(this.blockLeftAnimation.isDone()) {
// 												console.log("Block is done")
// 												//this.blockLeftAnimation.elapsedTime = 0;
												
												
												
											
// 										}
										
// 									}
// 								}
// 							}
		
							
// 						} else {
// 							this.gettingAttacked = false;
// 							if(this.currentAnimation === this.punchLeftAnimation || this.currentAnimation === this.punchLeft2Animation
// 								||this.currentAnimation === this.punchLeft3Animation||this.currentAnimation === this.kickLeftAnimation
// 								||this.currentAnimation === this.kickLeft2Animation){
//                                 ent.currentAnimation =  ent.attackedRightAnimation;
//                             }
// 							//ent.currentAnimation =  ent.attackedRightAnimation;
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
// 								ent.isBlocking = true;
// 								if(ent.currentAnimation.isDone()) {
// 									ent.isBlocking = false;
// 									//rand = Math.floor(Math.random() * Math.floor(2))
// 								}
// 								this.gettingAttacked = false;
// 							}
// 							if(ent.healthBar.hp <=0) {
// 								ent.removeFromWorld = true;
// 							}
// 							if(this.healthBar.hp <=0){
// 								ent.currentAnimation = ent.idleAnimation;
// 							}
// 							if(this.gettingAttacked == false) {
// 								this.attackedLeftAnimation.elapsedTime = 0;
// 								this.attackedRightAnimation.elapsedTime = 0;
// 							}
					
// 							 if (ent.currentAnimation == ent.kickLeftAnimation||
// 								ent.currentAnimation == ent.punchLeftAnimation) {
// 								 if (this.blocking) {
// 									if (this.facing === "R") {
// 										if (this.crouching) {
// 											this.currentAnimation = this.blockCrouchRightAnimation;
// 										} else {
// 											this.currentAnimation = this.blockRightAnimation;
											
// 										}
// 									} else {
// 										if (this.crouching) {
// 											this.currentAnimation = this.blockCrouchLeftAnimation;
// 										} else {
// 											this.currentAnimation = this.blockLeftAnimation;
// 										}
// 									}
// 								} else {
// 									this.gettingAttacked = true;
// 									console.log("LEFTT")
// 									 this.currentAnimation = this.facing === "L" ? this.attackedLeftAnimation : this.attackedRightAnimation;
// 									 if (this.currentAnimation.isDone()) {
								
// 										 this.currentAnimation.elapsedTime = 0;
// 										 this.gettingAttacked = false;
// 										 //this.currentAnimation = this.facing === "L" ? this.idleLeftAnimation : this.idleAnimation;
// 									 }
// 								 }	
// 							} else  if (this.blocking) {
// 								if (this.facing === "R") {
// 									if (this.crouching) {
					
// 										this.currentAnimation = this.blockCrouchRightAnimation;
										
// 									} else {
// 										this.currentAnimation = this.blockRightAnimation;
// 										if(this.blockRightAnimation.isDone()) {
// 											//this.blockRightAnimation.elapsedTime = this.blockRightAnimation.frameDuration+.1;
											
// 											//this.blockRightAnimation.elapsedTime = 0;
										
// 										}
// 									}
// 								} else {
// 									if (this.crouching) {
// 										this.currentAnimation = this.blockCrouchLeftAnimation;
// 									} else {
// 										this.currentAnimation = this.blockLeftAnimation;
// 										if(this.blockLeftAnimation.isDone()) {
// 												console.log("Block is done")
// 												//this.blockLeftAnimation.elapsedTime = 0;
												
												
												
											
// 										}
										
// 									}
// 								}
// 							}
// 						} else {
// 							this.gettingAttacked = false;
// 							if((this.currentAnimation === this.punchRightAnimation || this.currentAnimation === this.punchRight2Animation
// 							||this.currentAnimation === this.punchRight3Animation||this.currentAnimation === this.kickRightAnimation
// 							||this.currentAnimation === this.kickRight2Animation) && ent.isBlocking){
// 								ent.currentAnimation =  ent.attackedLeftAnimation;
//                             }
// 							//ent.currentAnimation =  ent.attackedLeftAnimation;
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
// 					// console.log("Goku " +this.x);
// 					// console.log("Scorpion "+ ent.x);
// 					if(this.x < ent.x && !(Math.abs(this.x - ent.x) < range)) {
// 						ent.facing = "L";
// 						ent.currentAnimation = ent.moveLeftAnimation;
// 						this.gettingAttacked = false;
// 						ent.x -= ent.speed;
// 					}
// 					else if(this.x > ent.x && !(Math.abs(this.x - ent.x) < range-10)) {
// 						ent.facing = "R";
// 						ent.currentAnimation = ent.moveAnimation
// 						this.gettingAttacked = false;
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
// }
// 	Entity.prototype.update.call(this);
// }

Goku.prototype.collide = function(other) {
	return this.currentBox.collide(other.currentBox);
}

Goku.prototype.isAttacking = function() {
	return (this.punching || this.punching2 || this.punching3
		|| this.kicking || this.kicking2 || this.uppercutting
		|| this.jumpKicking);
}

Goku.prototype.isToTheLeftOf = function(other) {
	return (this.x < other.x);
}

Goku.prototype.getAttackType = function() {
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


Goku.prototype.attackHandler = function(other, mult) {
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
Goku.prototype.draw = function(ctx, xView, yView) {
	if (!this.isBot) {
		this.healthBar.draw(ctx);
		this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x - xView, this.y - yView, this.scaleBy);
	} else {
		this.healthBar.draw(ctx);
		this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x - xView, this.y - yView, this.scaleBy);
	}
	Entity.prototype.draw.call(this);
}