import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Board } from '../entities/boards.entity';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  fetchBoards(): Promise<Board[]> {
    return this.boardsService.fetchBoards();
  }

  @Get(':id')
  fetchBoard(@Param('id', ParseIntPipe) id: number): Promise<Board> {
    return this.boardsService.fetchBoard(id);
  }

  @Post()
  createBoard(@Body() dto: CreateBoardDto): Promise<Board> {
    return this.boardsService.createBoard(dto);
  }

  @Put(':id')
  updateBoard(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateBoardDto,
  ): Promise<Board> {
    return this.boardsService.updateBoard(id, dto);
  }
}
