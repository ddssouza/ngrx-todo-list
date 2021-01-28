import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoListState } from './todo.state';

export const selectTodoListState = createFeatureSelector<TodoListState>(
  'todos'
);

export const selectAllTodos = createSelector(
  selectTodoListState,
  (state: TodoListState) => state.todos
);
