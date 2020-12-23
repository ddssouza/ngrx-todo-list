import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './app-state';
import { TodoItem } from './models/todo.model';
import { refreshTodosRequest, addTodoRequest, deleteTodoRequest } from './state/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  todos$ = this.store.pipe(select(state => state.todos));

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(refreshTodosRequest());
  }

  doAddTodo(todo: TodoItem) {
    this.store.dispatch(addTodoRequest({ todo }));
  }

  doDeleteTodo(todoId: number) {
    this.store.dispatch(deleteTodoRequest({ todoId }));
  }
}
