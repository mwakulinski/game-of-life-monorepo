import {
  Body,
  Controller,
  Get,
  Param,
  ParseFloatPipe,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

import { AppService } from './app.service';
import { BoardDto } from './dto/BoardDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('')
  createBoard(@Body() body: BoardDto) {
    return this.appService.createBoard(body);
  }

  @Get('tick/:id')
  tick(@Param('id') id: string) {
    return this.appService.tick(id);
  }

  @Get(':id')
  getBoard(@Param('id') id: string) {
    return this.appService.getBoard(id);
  }
}
