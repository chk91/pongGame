const size = 5;

export default class Ball {
    constructor(boardHeight, boardWidth) {
        this.x = 150;
        this.y = 80;
        this.vy = Math.floor(Math.random() * 12 - 6);
        this.vx = (7 - Math.abs(this.vy));
        this.speed = 5;
        this.size = 10;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
    }

    draw(context) {
        context.fillStyle = 'red';
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
        context.fill();
        context.closePath;
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
    }

    bounce() {
        const hitLeft = this.x + this.size >= this.boardWidth;
        const hitRight = this.x - this.size <= 0;
        const hitTop = this.y - this.size <= 0;
        const hitBottom = this.y >= this.boardHeight - this.size;
        if (hitLeft || hitRight) {
            this.vx *= -1
        }

        if (hitTop || hitBottom) {
            this.vy *= -1
        }
    }

    reset() {
        this.x = 150;
        this.y = 75;
        this.vx *= -1;
    }

    score(p1Score, p2Score) {
        if (this.x <= 0 + this.size) {
            this.reset();
            p1Score.score++;
        }
        else if (this.x >= game.width) {
            this.reset();
            p2Score.score++;
        }
    }

    paddleCollision(p1, p2) {

        const leftSide = p1.x + p1.width >= this.x - this.size;

        if (leftSide) {
            if (this.y >= p1.y && this.y <= p1.y + p1.height) {
                console.log('ass')
                this.vx *= -1
            }
        }
        const rightSide = this.x >= p2.x - this.size;
        if (rightSide) {
            console.log('asshole')
            if (this.y >= p2.y && this.y <= p2.y + p2.height) {
                console.log('asshole')
                this.vx *= -1
            }
        }
    }

    render(context, p1, p2) {
        this.move();
        this.draw(context);
        this.bounce();
        this.paddleCollision(p1, p2);
    }
}

