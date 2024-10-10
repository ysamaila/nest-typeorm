import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { Todo } from './entities/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])], // Import the TypeOrmModule and register the Todo entity
  providers: [TodosService],
  controllers: [TodosController],
})
export class TodosModule {}
