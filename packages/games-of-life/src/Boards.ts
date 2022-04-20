import { Cell } from './Cell';

export class Board {
  board: number[][] = [];

  createCustomBoard(board: number[][]) {
    this.board = board;
  }

  getBoard(): number[][] {
    return this.board;
  }

  getAllAliveNeighbors(x: number, y: number, board: number[][]) {
    let aliveNeighbors = 0;
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (j - 1 < 0 || j + 1 > board.length) continue;
        if (i - 1 < 0 || i + 1 > board.length) continue;
        if (i === x && j === y) continue;
        if (board[i][j] === 1) aliveNeighbors++;
      }
    }
    return aliveNeighbors;
  }

  tick() {
    return (this.board = this.board.map((row, i) => {
      return row.map((col, j) => {
        const n = this.getAllAliveNeighbors(i, j, this.board);
        const cell = new Cell(this.board[i][j], n).tick().getState();
        return cell;
      });
    }));
  }
}
