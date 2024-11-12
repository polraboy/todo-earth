import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { ADD_TODO } from './dto/todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  @HttpCode(200)
  getTodos() {
    return this.todosService.fetchTodo();
  }
  @Post()
  @HttpCode(201)
  addTodo(@Body() todo: ADD_TODO) {
    return this.todosService.addTodo(todo);
  }
  @Delete('/:id')
  @HttpCode(200)
  async deleteTodo(@Param('id') id: number) {
    console.log(id);
    return await this.todosService.deleteTodo(id); 
  }
}
