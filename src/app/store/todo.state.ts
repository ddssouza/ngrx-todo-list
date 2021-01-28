import { TodoItem } from '../models/todo.model';

export interface TodoListState {
  todos: TodoItem[];
}

export const initialTodoState: TodoListState = {
  todos: [],
};
