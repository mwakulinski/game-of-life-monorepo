import { Injectable } from '@nestjs/common';
import { Board } from '@monorepo2/games-of-life';
import { BoardDto } from './dto/BoardDto';

@Injectable()
export class AppService {
  boardInstance = new Board();

  createBoard(board: BoardDto) {
    this.boardInstance.createCustomBoard(board);
    return board.id;
  }

  tick(id: number) {
    return this.boardInstance.tick(id);
  }

  getBoard(id: number) {
    return this.boardInstance.getBoard(id);
  }
}
