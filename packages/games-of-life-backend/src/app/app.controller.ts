import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  tick() {
    return this.appService.tick();
  }

  @Post()
  createBoard(@Body() body: { array: number[][] }) {
    return this.appService.createBoard(body.array);
  }
}
