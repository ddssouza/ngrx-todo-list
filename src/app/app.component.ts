import { TodoListState } from './store/todo.state';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TodoItem } from './models/todo.model';
import {
  refreshTodosRequest,
  addTodoRequest,
  deleteTodoRequest,
} from './store/todo.actions';
import { selectAllTodos } from './store/todo.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  todos$: Observable<TodoItem[]>;

  constructor(private store: Store<TodoListState>) {
    this.todos$ = this.store.pipe(select(selectAllTodos));
  }

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
