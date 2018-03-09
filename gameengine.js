window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (/* function */ callback, /* DOMElement */ element) {
                window.setTimeout(callback, 1000 / 60);
            };
})();

function Timer() {
    this.gameTime = 0;
    this.maxStep = 0.05;
    this.wallLastTimestamp = 0;
}

Timer.prototype.tick = function () {
    var wallCurrent = Date.now();
    var wallDelta = (wallCurrent - this.wallLastTimestamp) / 1000;
    this.wallLastTimestamp = wallCurrent;

    var gameDelta = Math.min(wallDelta, this.maxStep);
    this.gameTime += gameDelta;
    return gameDelta;
}

function GameEngine() {
    this.entities = [];
    this.showOutlines = false;
    this.ctx = null;
    this.click = null;
    this.mouse = null
    this.wheel = null;
    this.surfaceWidth = null;
    this.surfaceHeight = null;

    this.moveRight = null;
    this.crouch = null;
    
}

GameEngine.prototype.init = function (ctx) {
    this.ctx = ctx;
    this.surfaceWidth = this.ctx.canvas.width;
    this.surfaceHeight = this.ctx.canvas.height;
    this.timer = new Timer();
    this.startInput();




    // Viewport
    this.xView = 0;
    this.yView = 0;

    //Scorpion's status fields.
    this.moveRight = null;
    this.crouch = null;
    this.moveLeft = null;
    this.punch = null;
    this.punch2 = null;
    this.punch3 = null;

    this.kick = null;
    this.kick2 = null;

    this.block = null;

    this.jump = null;

    this.jumpKick = null;

    this.uppercut = null;

    //Just a fun easter egg field
    this.ultraSpeed = null;
    console.log('game initialized');
}

GameEngine.prototype.start = function () {
    console.log("starting game");
    var that = this;
    (function gameLoop() {
        that.loop();
        requestAnimFrame(gameLoop, that.ctx.canvas);
    })();
}

GameEngine.prototype.startInput = function() {
    

    var that = this;
    
    //Event listeners:

    this.ctx.canvas.addEventListener("keydown", function(e) {
        //Scorpion's
        if (e.keyCode === 39) {
            that.moveRight = true;
        } else if (e.keyCode === 40) {
            that.crouch = true;
        } else if (e.keyCode === 37) {
            that.moveLeft = true;
        } else if (e.keyCode === 85) {
            if (that.ultraSpeed) {
                that.ultraSpeed = null;
            } else {
                that.ultraSpeed = true;
            }
        } else if (e.keyCode === 103) {
            if (that.punch2) {
                that.punch3 = true;
            } else if (that.punch) {
                that.punch2 = true;
            } else if (!that.punch2 && !that.punch3 && !that.kick && !that.kick2
                && !that.jump && !that.crouch){
                that.punch = true;
            } else if (that.crouch && !that.jump && !that.kick && !that.kick2) {
                that.uppercut = true;
            }
        } else if (e.keyCode === 105) {
            if (that.kick) {
                that.kick2 = true;
            }else if (!that.punch && !that.punch2 && !that.punch3 && !that.kick2
                && !that.jump) {
                that.kick = true;
            } else if (that.jump) {
                that.jumpKick = true;
            }
        } else if (e.keyCode === 96) {
            that.block = true;
        } else if (e.keyCode === 38) {
            if (!that.punch && !that.punch2 && !that.punch3 && !that.kick
                && !that.kick2) {
                that.jump = true;
            }
        }
        //Gokku's (Unicorn's)
        if (String.fromCharCode(e.which) === ' ') that.space = true;
        if (String.fromCharCode(e.which) === 'K') that.kick = true;
        if (String.fromCharCode(e.which) === 'A') that.left = true;
        if (String.fromCharCode(e.which) === 'D') that.right = true;
        e.preventDefault();
    }, false);

    this.ctx.canvas.addEventListener("keyup", function(e) {
        //Scorpion's
        if (e.keyCode === 39) {
            that.moveRight = null;
        } else if (e.keyCode === 37) {
            that.moveLeft = null;
        } else if (e.keyCode === 40) {
            that.crouch = null;
        } else if (e.keyCode === 96) {
            that.block = null;
        }
        //Gokku's (unicorn's)
        if (String.fromCharCode(e.which) === 'A') that.left = null;
        e.preventDefault();
    }, false);

    

}

GameEngine.prototype.addEntity = function (entity) {
    console.log('added entity');
    this.entities.push(entity);
}

GameEngine.prototype.draw = function () {
    this.ctx.clearRect(0, 0, this.surfaceWidth, this.surfaceHeight);
    this.ctx.save();
    for (var i = 0; i < this.entities.length; i++) {
        this.entities[i].draw(this.ctx, this.xView, this.yView);
    }
    this.ctx.restore();
}

GameEngine.prototype.update = function () {
    var entitiesCount = this.entities.length;

    for (var i = 0; i < entitiesCount; i++) {
        var entity = this.entities[i];

        if (!entity.removeFromWorld) {
            entity.update();
        }
    }

    for (var i = this.entities.length - 1; i >= 0; --i) {
        if (this.entities[i].removeFromWorld) {
            this.entities.splice(i, 1);
        }
    }
}

GameEngine.prototype.loop = function () {
    this.clockTick = this.timer.tick();
    this.update();
    this.draw();

    //++++++++Gokku's (Unicorn's)
    this.space = null;
    //this.kick = null;
    this.left = null;
    this.right = null;
    this.combo = null;
}

function Entity(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.removeFromWorld = false;
}

Entity.prototype.update = function () {
}

Entity.prototype.draw = function (ctx) {
    if (this.game.showOutlines && this.radius) {
        this.game.ctx.beginPath();
        this.game.ctx.strokeStyle = "green";
        this.game.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.game.ctx.stroke();
        this.game.ctx.closePath();
    }
}

Entity.prototype.rotateAndCache = function (image, angle) {
    var offscreenCanvas = document.createElement('canvas');
    var size = Math.max(image.width, image.height);
    offscreenCanvas.width = size;
    offscreenCanvas.height = size;
    var offscreenCtx = offscreenCanvas.getContext('2d');
    offscreenCtx.save();
    offscreenCtx.translate(size / 2, size / 2);
    offscreenCtx.rotate(angle);
    offscreenCtx.translate(0, 0);
    offscreenCtx.drawImage(image, -(image.width / 2), -(image.height / 2));
    offscreenCtx.restore();
    //offscreenCtx.strokeStyle = "red";
    //offscreenCtx.strokeRect(0,0,size,size);
    return offscreenCanvas;
}