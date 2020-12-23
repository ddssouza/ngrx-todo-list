import { createAction, props } from '@ngrx/store';

import { TodoItem } from '../models/todo.model';

export const refreshTodosRequest = createAction('[Todo] Refresh Todos Request');
export const refreshTodosDone = createAction('[Todo] Refresh Todos Done', props<{ todos: TodoItem[] }>());
export const addTodoRequest = createAction('[Todo] Add Todo Request', props<{ todo: TodoItem }>());
export const deleteTodoRequest = createAction('[Todo] Delete Todo Request', props<{ todoId: number }>());
