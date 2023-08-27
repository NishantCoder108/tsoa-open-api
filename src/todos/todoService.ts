import { Todo } from "./todo";

//pick ,just from choosing ,that are previous done
export type TodoCreationParams = Pick<Todo, "title" | "description">;

export class TodosService {
  public get(todoId: string): Todo {
    return {
      id: todoId,
      title: "Rock Todo",
      description: " Rock Todo",
      done: false,
    };
  }

  public create(_todoCreationParams: TodoCreationParams): Todo {
    console.log("Rock DB is call");

    return {
      id: "1",
      title: "Rock Todo",
      done: false,
      description: "Rock Todo",
      //  ...todoCreationParams
    };
  }
}
