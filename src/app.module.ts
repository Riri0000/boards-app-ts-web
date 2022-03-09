import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './entities/boards.entity';

@Module({
  imports: [TypeOrmModule.forRoot(), BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
