import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { BoardDto } from './dto/BoardDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/api')
  createBoard(@Body() body: BoardDto) {
    console.log(body);
    return this.appService.createBoard(body.array);
  }

  @Get('/api/tick')
  tick() {
    return this.appService.tick();
  }

  @Get('/api')
  getBoard() {
    return this.appService.getBoard();
  }
}
