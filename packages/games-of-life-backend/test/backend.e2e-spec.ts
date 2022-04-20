import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app/app.module';
import { BoardDto } from '../src/app/dto/BoardDto';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  async function createBoard(board: BoardDto) {
    await request(app.getHttpServer()).post('/api').send(board).expect(201);
  }

  const mockBoard = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 0],
  ];

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/api (POST)', () => {});
  it('it should create board with given shape', async () => {
    createBoard({ array: mockBoard });
    const { body: response } = await request(app.getHttpServer())
      .get('/api')
      .send();
    expect(response).toEqual(mockBoard);
  });
});
