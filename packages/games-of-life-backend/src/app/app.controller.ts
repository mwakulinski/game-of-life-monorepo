import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { AppService } from './app.service';
import { BoardDto } from './dto/BoardDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('')
  @UsePipes(new ValidationPipe({ transform: true }))
  createBoard(@Body() body: BoardDto) {
    try {
      const response = this.appService.createBoard(body);
      return response;
    } catch (error) {
      throw error;
    }
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
