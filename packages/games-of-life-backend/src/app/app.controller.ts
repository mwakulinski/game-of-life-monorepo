import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

import { AppService } from './app.service';
import { BoardDto } from './dto/BoardDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/api')
  createBoard(@Body() body: BoardDto) {
    return this.appService.createBoard(body);
  }

  @Get('/api/tick/:id')
  tick(@Param('id', ParseIntPipe) id: number) {
    return this.appService.tick(id);
  }

  @Get('/api/:id')
  getBoard(@Param('id', ParseIntPipe) id: number) {
    return this.appService.getBoard(id);
  }
}
