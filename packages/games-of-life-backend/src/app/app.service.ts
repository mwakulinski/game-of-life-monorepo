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

  tick(id: string) {
    console.log(id);
    const newBoard = this.boardInstance.tick(id);
    console.log(newBoard);
    return newBoard;
  }

  getBoard(id: string) {
    return this.boardInstance.getBoard(id);
  }
}
