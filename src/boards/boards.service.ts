import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from '../entities/boards.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardsService {
  constructor(@InjectRepository(Board) private repo: Repository<Board>) {}

  async fetchBoards() {
    return await this.repo.find();
  }

  async fetchBoard(id: number) {
    if (!id) {
      throw new NotFoundException('the board not found');
    }
    return await this.repo.findOne(id);
  }

  async createBoard(dto: CreateBoardDto) {
    return this.repo.save(dto);
  }

  async updateBoard(id: number, dto: UpdateBoardDto) {
    const board = await this.repo.findOne({ id });

    if (!board) {
      throw new NotFoundException('the board not found');
    }

    return this.repo.save({ ...board, dto });
  }
}
