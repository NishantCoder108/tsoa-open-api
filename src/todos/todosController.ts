import { Controller, Get, Path, Route } from "tsoa";
import { Todo } from "./todo";
import { TodosService } from "./todoService";

@Route("todo")
export class TodoController extends Controller {
  @Get("{todoId}")
  public async getTodo(@Path() todoId: string): Promise<Todo> {
    let todoService = new TodosService();
    return todoService.get(todoId);
  }
}
