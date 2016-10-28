export default class Paddle {
    constructor(boardHeight, x, color, keys) {
        this.width = 5;
        this.height = 50;
        this.speed = 5;
        this.color = color;
        this.x = x;
        this.y = (boardHeight / 2) - (this.height / 2);
        this.keys = keys;
        document.addEventListener('keydown', event => this.keyListener(event));
    }
    
    keyListener(event) {
        switch (event.keyCode) {
            case this.keys.up:
                this.moveUp();
                break;
            case this.keys.down:
                this.moveDown();
                break;
            default: return;
        }
    }

    moveUp() {
        console.log('up')
        if (this.y - this.speed >= 0){
            this.y -= this.speed;}
    }

    moveDown() {
        if (this.y + this.speed <= 100){
        
        this.y += this.speed;}
    }

    render(context) { 
        context.fillStyle = this.color;
        context.fillRect(
            this.x, this.y,
            this.width, this.height
        );
    }
}