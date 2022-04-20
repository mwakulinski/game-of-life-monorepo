import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app/app.module';
import { BoardDto } from '../src/app/dto/BoardDto';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  async function createBoard(board: BoardDto) {
    await request(app.getHttpServer()).post('/').send(board).expect(201);
  }

  const mockBoard = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 0],
  ];

  const mockBoardAfterTick = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1],
    [0, 0, 0, 1, 1],
  ];

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/api (POST)', () => {
    it('it should create board with given shape', async () => {
      createBoard({ id: '1', array: mockBoard });
      const { body: response } = await request(app.getHttpServer())
        .get('/1')
        .send();
      expect(response).toEqual(mockBoard);
    });

    it('it throw error when no id passed', async () => {
      const { body: response } = await request(app.getHttpServer())
        .post('/')
        .send({ id: '', array: mockBoard })
        .expect(400);
      expect(response).toEqual(
        expect.objectContaining({
          message: ['id must be longer than or equal to 1 characters'],
        })
      );
    });
  });

  describe('/api/tick (GET)', () => {});
  it('it changes the board after tick method', async () => {
    createBoard({ id: '1', array: mockBoard });
    const { body: response } = await request(app.getHttpServer())
      .get('/tick/1')
      .send();
    expect(response).toEqual(mockBoardAfterTick);
  });
});
