import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { TodoService } from '../services/todo.service';
import { switchMap, map, mergeMap } from 'rxjs/operators';

// Actions
import {
  refreshTodosDone,
  refreshTodosRequest,
  addTodoRequest,
  deleteTodoRequest,
} from './todo.actions';

@Injectable()
export class TodoEffects {
  constructor(private todoService: TodoService, private actions$: Actions) {}

  refreshTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(refreshTodosRequest),
      switchMap(() => {
        return this.todoService
          .all()
          .pipe(map((todos) => refreshTodosDone({ todos })));
      })
    )
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTodoRequest),
      mergeMap(({ todo }) => {
        return this.todoService
          .add(todo)
          .pipe(map(() => refreshTodosRequest()));
      })
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTodoRequest),
      mergeMap(({ todoId }) => {
        return this.todoService
          .delete(todoId)
          .pipe(map(() => refreshTodosRequest()));
      })
    )
  );
}
