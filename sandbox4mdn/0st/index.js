var SnakeGame = /** @class */ (function () {
    function SnakeGame(canvasId) {
        this.gridSize = 20;
        this.timerId = null;
        this.dx = 20;
        this.dy = 0;
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.snake = [{ x: 160, y: 160 }, { x: 140, y: 160 }, { x: 120, y: 160 }];
        this.food = { x: 80, y: 80 };
        document.addEventListener("keydown", this.changeDirection.bind(this));
        this.render();
    }
    SnakeGame.prototype.start = function () {
        var _this = this;
        if (!this.timerId) {
            this.timerId = window.setInterval(function () { return _this.update(); }, 100);
        }
    };
    SnakeGame.prototype.stop = function () {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    };
    SnakeGame.prototype.update = function () {
        this.moveSnake();
        if (this.checkCollision()) {
            this.stop();
            this.ctx.font = "20px Arial";
            this.ctx.fillStyle = "red";
            this.ctx.fillText("Game Over!", this.canvas.width / 4, this.canvas.height / 2);
        }
        else {
            this.render();
        }
    };
    SnakeGame.prototype.moveSnake = function () {
        var head = { x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy };
        this.snake.unshift(head);
        if (this.snake[0].x === this.food.x && this.snake[0].y === this.food.y) {
            this.placeFood();
        }
        else {
            this.snake.pop();
        }
    };
    SnakeGame.prototype.checkCollision = function () {
        for (var i = 4; i < this.snake.length; i++) {
            if (this.snake[i].x === this.snake[0].x && this.snake[i].y === this.snake[0].y) {
                return true;
            }
        }
        var hitLeftWall = this.snake[0].x < 0;
        var hitRightWall = this.snake[0].x > this.canvas.width - this.gridSize;
        var hitTopWall = this.snake[0].y < 0;
        var hitBottomWall = this.snake[0].y > this.canvas.height - this.gridSize;
        return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
    };
    SnakeGame.prototype.placeFood = function () {
        var foodX;
        var foodY;
        do {
            foodX = Math.floor(Math.random() * (this.canvas.width / this.gridSize)) * this.gridSize;
            foodY = Math.floor(Math.random() * (this.canvas.height / this.gridSize)) * this.gridSize;
        } while (this.snake.some(function (segment) { return segment.x == foodX && segment.y == foodY; }));
        this.food = { x: foodX, y: foodY };
    };
    SnakeGame.prototype.render = function () {
        var _this = this;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "lightgreen";
        this.snake.forEach(function (part) {
            _this.ctx.fillRect(part.x, part.y, _this.gridSize, _this.gridSize);
        });
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.food.x, this.food.y, this.gridSize, this.gridSize);
    };
    SnakeGame.prototype.changeDirection = function (event) {
        var keyPressed = event.key;
        var goingUp = this.dy === -this.gridSize;
        var goingDown = this.dy === this.gridSize;
        var goingRight = this.dx === this.gridSize;
        var goingLeft = this.dx === -this.gridSize;
        switch (keyPressed) {
            case "ArrowLeft":
                if (!goingRight) {
                    this.dx = -this.gridSize;
                    this.dy = 0;
                }
                break;
            case "ArrowUp":
                if (!goingDown) {
                    this.dy = -this.gridSize;
                    this.dx = 0;
                }
                break;
            case "ArrowRight":
                if (!goingLeft) {
                    this.dx = this.gridSize;
                    this.dy = 0;
                }
                break;
            case "ArrowDown":
                if (!goingUp) {
                    this.dy = this.gridSize;
                    this.dx = 0;
                }
                break;
        }
    };
    return SnakeGame;
}());
window.onload = function () {
    var game = new SnakeGame("gameCanvas");
    game.start();
};
