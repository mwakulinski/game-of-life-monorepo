import { Board } from '../src/Boards';

describe('GOL', () => {
  let game = new Board();
  beforeEach(() => {
    game = new Board();
  });
  it('should create new instance of class', () => {
    expect(game).toBeTruthy;
  });

  it('should calculate number o alive neighbors', () => {
    const board = [
      [0, 0, 0],
      [0, 1, 1],
      [0, 1, 0],
    ];
    game.createCustomBoard(board);
    const numberOfAliveNeighbors = game.getAllAliveNeighbors(0, 0, board);
    expect(numberOfAliveNeighbors).toBe(1);
  });

  it('should calculate new board', () => {
    const board = [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 1, 1],
      [0, 0, 0, 1, 0],
    ];
    const boardAfterTick = [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 1, 1],
      [0, 0, 0, 1, 1],
    ];
    game.createCustomBoard(board);
    game.tick();
    expect(game.getBoard()).toEqual(boardAfterTick);
  });
});
