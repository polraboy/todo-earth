import {
  BadGatewayException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';
import { ADD_TODO } from './dto/todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private readonly TodoRepository: Repository<Todo>,
  ) {}

  async addTodo(todo: ADD_TODO) {
    try {
      const newTodo = await this.TodoRepository.save(todo);
      return newTodo;
    } catch (err) {
      console.log(err);
      throw new BadGatewayException();
    }
  }

  async fetchTodo(): Promise<Todo[]> {
    try {
      const todos = await this.TodoRepository.find();
      return todos;
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException();
    }
  }

  async deleteTodo(id: number): Promise<number> {
    try {
      const result = await this.TodoRepository.delete({ id: id }); // Directly pass the ID
      return result.affected ?? 0; // Return the number of affected rows
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Error deleting todo');
    }
  }
}
