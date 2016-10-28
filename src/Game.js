import Paddle from './Paddle';
import Board from './Board';
import Ball from './Ball';
import {
    player1Keys,
    player2Keys
} from './keys';
const gap = 10;
export default class Game {
    constructor(id) {
        const canvas = document.getElementById('game');
        this.width = canvas.width;
        this.height = canvas.height;
        this.context = canvas.getContext('2d');
        this.context.fillStyle = 'white';
        this.board = new Board(this.height, this.width);
        this.p1 = new Paddle(this.height, 5, 'yellow', player1Keys)
        this.p2 = new Paddle(this.height, this.width - 10, 'blue', player2Keys)
        this.ball = new Ball(this.height/2, this.width/2, this.size,5, 'blue');
    }
    render() {
        this.board.render(this.context);
        this.p1.render(this.context);
        this.p2.render(this.context);
        this.ball.render(this.context);
    }
}