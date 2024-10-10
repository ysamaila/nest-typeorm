import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  
  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const newTodo = this.todoRepository.create(createTodoDto); 
    return this.todoRepository.save(newTodo); 
  }

  
  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find(); // Returns all todos
  }

  
  async findOne(id: number): Promise<Todo> {
    const todo = await this.todoRepository.findOne({ where: { id } });
  
    if (!todo) {
      throw new Error(`Todo with id ${id} not found`); 
    }
  
    return todo;
  }
  

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    await this.todoRepository.update(id, updateTodoDto); 
    const updatedTodo = await this.todoRepository.findOne({ where: { id } }); 
  
    if (!updatedTodo) {
      throw new Error(`Todo with id ${id} not found after update`); 
    }
  
    return updatedTodo; 
  } 
  
  
  async remove(id: number): Promise<void> {
    const todo = await this.todoRepository.findOne({ where: { id } });
    if(!todo){
      throw new Error(`Todo with id:${id} not found`);
    }else{
      await this.todoRepository.delete(id); 

    }
  }
}
