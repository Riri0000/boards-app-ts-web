import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('boards')
export class BoardsController {
  @Get()
  fetchBoards(): string {
    return 'this action returns all boards';
  }

  @Get(':id')
  fetchBoard(@Param('id') id: string): string {
    return 'this action returns a board';
  }

  @Post()
  createBoard(): string {
    return 'this action creates a board';
  }

  @Put(':id')
  updateBoard(
    @Param('id') id: string,
    @Body() updateBoardDto: UpdateBoardDto,
  ): string {
    return 'this action update the task';
  }
}
