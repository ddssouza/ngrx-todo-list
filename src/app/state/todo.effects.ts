import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { TodoService } from './../services/todo.service';
import { switchMap, map } from 'rxjs/operators';

// Actions
import { refreshTodosDone, refreshTodosRequest, addTodoRequest, deleteTodoRequest } from './todo.actions';

@Injectable()
export class TodoEffects {
    constructor(
        private todoSrv: TodoService, 
        private actions$: Actions
    ) { }
    
    refreshTodos$ = createEffect(() => this.actions$.pipe(
        ofType(refreshTodosRequest),
        switchMap(() => {
            return this.todoSrv.all().pipe(
                map(todos => refreshTodosDone({ todos }))
            )
        })
    ));

    addTodo$ = createEffect(() => this.actions$.pipe(
        ofType(addTodoRequest),
        switchMap((action) => {
            return this.todoSrv.add(action.todo).pipe(
                map(() => refreshTodosRequest())
            )
        })
    ))

    deleteTodo$ = createEffect(() => this.actions$.pipe(
        ofType(deleteTodoRequest),
        switchMap((action) => {
            return this.todoSrv.delete(action.todoId).pipe(
                map(() => refreshTodosRequest())
            )
        })
    ))
}