import { createReducer, on } from '@ngrx/store';

// import actions 
import { refreshTodosDone } from './todo.actions';

// Import models
import { TodoItem } from './../models/todo.model';

export const todosReducer = createReducer<TodoItem[]>([],
    on(refreshTodosDone, (_, action) => action.todos)
);