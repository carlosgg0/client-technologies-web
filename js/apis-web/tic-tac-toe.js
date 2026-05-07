class Canvas {
    constructor(id) {
        this.canvas = document.querySelector(`#${id}`);
        this.WIDTH = (this.canvas.width = window.innerWidth);
        this.HEIGHT = (this.canvas.height = window.innerHeight);
        
        this.ctx = this.canvas.getContext('2d');
        this.ctx.fillStyle = "#a8be9c92";
        this.ctx.fillRect(0, 0, this.WIDTH, this.HEIGHT);
        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = 'black';
        
        this.BOARD_LENGTH = 0.6 * this.WIDTH;
        this.CELL_LENGTH = this.BOARD_LENGTH / 3;
        this.BOARD_X = 10;
        this.BOARD_Y = 10;
    }

    drawBoard() {
        // LINEAS HORIZONTALES
        for (let i = 0; i < 4; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.BOARD_X, this.BOARD_Y + i * this.CELL_LENGTH);
            this.ctx.lineTo(this.BOARD_X + this.BOARD_LENGTH, this.BOARD_Y + i * this.CELL_LENGTH);
            this.ctx.stroke();
        }
        // LINEAS VERTICALES
        for (let i = 0; i < 4; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.BOARD_X + i * this.CELL_LENGTH, this.BOARD_Y);
            this.ctx.lineTo(this.BOARD_X + i * this.CELL_LENGTH, this.BOARD_Y + this.BOARD_LENGTH);
            this.ctx.stroke();
        }
    }

    drawCross(row, col) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.BOARD_X + (row * this.CELL_LENGTH) + 1 / 3 * this.CELL_LENGTH, this.BOARD_Y + (col * this.CELL_LENGTH) + 1 / 3 * this.CELL_LENGTH);
        this.ctx.lineTo(this.BOARD_X + (row * this.CELL_LENGTH) + 2 / 3 * this.CELL_LENGTH, this.BOARD_Y + (col * this.CELL_LENGTH) + 2 / 3 * this.CELL_LENGTH)
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(this.BOARD_X + (row * this.CELL_LENGTH) + 2 / 3 * this.CELL_LENGTH, this.BOARD_Y + (col * this.CELL_LENGTH) + 1 / 3 * this.CELL_LENGTH);
        this.ctx.lineTo(this.BOARD_X + (row * this.CELL_LENGTH) + 1 / 3 * this.CELL_LENGTH, this.BOARD_Y + (col * this.CELL_LENGTH) + 2 / 3 * this.CELL_LENGTH)
        this.ctx.stroke();
    }

    drawCircle(row, col) {
        this.ctx.beginPath();
        this.ctx.arc(
            this.BOARD_X + (row * this.CELL_LENGTH) + 1 / 2 * this.CELL_LENGTH,
            this.BOARD_Y + (col * this.CELL_LENGTH) + 1 / 2 * this.CELL_LENGTH,
            this.CELL_LENGTH / 3,
            0, 2 * Math.PI
        );
        this.ctx.stroke();
    }

    getBoardCoords(curX, curY) {
        let row = -1, col = -1;

        if (curX >= this.BOARD_X && curX <= this.BOARD_X + this.BOARD_LENGTH &&
            curY >= this.BOARD_Y && curY <= this.BOARD_Y + this.BOARD_LENGTH) {

            row = Math.floor((curX - this.BOARD_X) / this.CELL_LENGTH);
            col = Math.floor((curY - this.BOARD_Y) / this.CELL_LENGTH);
        }

        return [row, col];
    }
}

class Game {
    static shape = {
        CROSS: 0, CIRCLE: 1
    };

    constructor() {
        this.turn = Game.shape.CROSS,
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ],
        this.won = false
    }

    checkBoard(row, col, shape) {
        let winRow = true, 
            winCol = true, 
            winDiag1 = true, 
            winDiag2 = true;

        // Comprobar fila
        for (let c = 0; c < this.board.length; c++) {
            if (this.board[row][c] != shape) 
                winRow = false;
        }

        // Comprobar columna
        for (let r = 0; r < this.board.length; r++) {
            if (this.board[r][col] != shape) 
                winCol = false;
        }

        // Comprobar diagonal principal
        for (let i = 0; i < this.board.length; i++) {
            if (this.board[i][i] != shape) 
                winDiag1 = false;
        }

        // Comprobar la otra diagonal
        for (let i = 0; i < this.board.length; i++) {
            if (this.board[i][this.board.length - i - 1] != shape) 
                winDiag2 = false;
        }

        return winRow || winCol || winDiag1 || winDiag2;
    }
}

const myCanvas = new Canvas('my-canvas');
const game = new Game();

myCanvas.drawBoard();

myCanvas.canvas.addEventListener('click', e => {
    if (game.won) return;

    const [row, col] = myCanvas.getBoardCoords(e.pageX, e.pageY);
    
    if (row == -1 || col == -1 || 
        game.board[row][col] !== null)
        return; 

    game.board[row][col] = game.turn;

    if (game.turn === Game.shape.CROSS) myCanvas.drawCross(row, col);
    else myCanvas.drawCircle(row, col);

    if (game.checkBoard(row, col, game.turn)) {
        console.log(`El jugador ${game.turn} ha ganado!`);
        game.won = true;
    }

    game.turn = (game.turn + 1) % 2;
});