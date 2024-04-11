class SnakeGame {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private snake: Array<{x: number, y: number}>;
    private food: {x: number, y: number};
    private gridSize: number = 20;
    private timerId: number | null = null;
    private dx: number = 20;
    private dy: number = 0;

    constructor(canvasId: string) {
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d")!;
        this.snake = [{x: 160, y: 160}, {x: 140, y: 160}, {x: 120, y: 160}];
        this.food = {x: 80, y: 80};
        document.addEventListener("keydown", this.changeDirection.bind(this));
        this.render();
    }

    start() {
        if (!this.timerId) {
            this.timerId = window.setInterval(() => this.update(), 100);
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    private update() {
        this.moveSnake();
        if (this.checkCollision()) {
            this.stop();
            this.ctx.font = "20px Arial";
            this.ctx.fillStyle = "red";
            this.ctx.fillText("Game Over!", this.canvas.width / 4, this.canvas.height / 2);
        } else {
            this.render();
        }
    }

    private moveSnake() {
        const head = {x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy};
        this.snake.unshift(head);
        if (this.snake[0].x === this.food.x && this.snake[0].y === this.food.y) {
            this.placeFood();
        } else {
            this.snake.pop();
        }
    }

    private checkCollision() {
        for (let i = 4; i < this.snake.length; i++) {
            if (this.snake[i].x === this.snake[0].x && this.snake[i].y === this.snake[0].y) {
                return true;
            }
        }
        const hitLeftWall = this.snake[0].x < 0;
        const hitRightWall = this.snake[0].x > this.canvas.width - this.gridSize;
        const hitTopWall = this.snake[0].y < 0;
        const hitBottomWall = this.snake[0].y > this.canvas.height - this.gridSize;
        return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
    }

    private placeFood() {
        let foodX;
        let foodY;
        do {
            foodX = Math.floor(Math.random() * (this.canvas.width / this.gridSize)) * this.gridSize;
            foodY = Math.floor(Math.random() * (this.canvas.height / this.gridSize)) * this.gridSize;
        } while (this.snake.some(segment => segment.x == foodX && segment.y == foodY));

        this.food = {x: foodX, y: foodY};
    }

    private render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "lightgreen";
        this.snake.forEach(part => {
            this.ctx.fillRect(part.x, part.y, this.gridSize, this.gridSize);
        });
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.food.x, this.food.y, this.gridSize, this.gridSize);
    }

    private changeDirection(event: KeyboardEvent) {
        const keyPressed = event.key;
        const goingUp = this.dy === -this.gridSize;
        const goingDown = this.dy === this.gridSize;
        const goingRight = this.dx === this.gridSize;
        const goingLeft = this.dx === -this.gridSize;

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
    }
}

window.onload = () => {
    const game = new SnakeGame("gameCanvas");
    game.start();
}
