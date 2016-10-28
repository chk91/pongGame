const size = 5;

export default class Ball {
    constructor() {
        this.x = 150
        this.y = 50
        this.vx = (7 - Math.abs(this.vy))
        this.vy = Math.floor(Math.random() * 12 - 6)
        this.speed = 5;
    }

    draw(context) {
        context.fillStyle = 'red';
        context.beginPath();
        context.arc(100, 100, 5, 0, Math.PI * 2, true);
        context.fill();
    }

    render(context) {
        this.x += this.vx;
        this.y += this.vy;
        this.draw(context);


    }
}

