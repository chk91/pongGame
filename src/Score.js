export default class ScoreBoard {
    constructor(x, y) {
        this.x = x;
        this.y = y;


    }
    draw(context, p1) {
         // console.log(p1)
        context.fillText(p1.score, this.x-150, this.y);
    }
draw2(context, p2) {
        // console.log(p1)
        context.fillText(p2.score, this.x, this.y);
    }
    render(context, p1, p2) {
        this.draw(context,p1);
        this.draw2(context,p2);
    }
}