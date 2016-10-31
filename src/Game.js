import Paddle from './Paddle';
import Board from './Board';
import Ball from './Ball';
import ScoreBoard from './Score';
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
        this.ball = new Ball(this.height, this.width);
        this.ball2 = new Ball(this.height, this.width);
        this.score = new ScoreBoard(225, 85);
    }
    render() {
        this.board.render(this.context);
        this.p1.render(this.context);
        this.p2.render(this.context);
        this.score.render(this.context,this.p1, this.p2);
        this.ball.render(this.context, this.p1, this.p2, this.p1Score, this.p2Score);
        this.ball2.render(this.context, this.p1, this.p2, this.p1Score, this.p2Score)

    }
}