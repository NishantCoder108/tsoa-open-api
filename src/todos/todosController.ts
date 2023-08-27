import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import { Todo } from "./todo";
import { TodoCreationParams, TodosService } from "./todoService";

@Route("todo")
export class TodoController extends Controller {
  @Get("{todoId}")
  public async getTodo(@Path() todoId: string): Promise<Todo> {
    let todoService = new TodosService();
    return todoService.get(todoId);
  }
}
