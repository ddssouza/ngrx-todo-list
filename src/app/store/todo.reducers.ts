import { createReducer, on } from '@ngrx/store';

// import actions
import { refreshTodosDone } from './todo.actions';

// Import default state
import { initialTodoState, TodoListState } from './todo.state';

export const TodosReducer = createReducer<TodoListState>(
  initialTodoState,
  on(refreshTodosDone, (state, action) => ({
    ...state,
    todos: action.todos,
  }))
);
