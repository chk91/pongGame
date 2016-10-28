import './game.css';
import Game from './Game';
import Paddle from './Paddle';
import Board from './Board';
var game = new Game();
const ms = 30;
// self invoking function
(function gameLoop() {
    game.render();
    setTimeout(gameLoop, ms);
}());