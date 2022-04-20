import { Injectable } from '@nestjs/common';
import { Board } from '@monorepo2/games-of-life';

@Injectable()
export class AppService {
  constructor(private readonly boardInstance: Board) {}
  createBoard(board: number[][]) {
    this.boardInstance.createCustomBoard(board);
    return this.boardInstance.getBoard();
  }

  tick() {
    return this.boardInstance.tick();
  }
}
