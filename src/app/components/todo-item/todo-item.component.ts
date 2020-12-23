import { TodoItem } from './../../models/todo.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'todo-item', 
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.sass']
})

export class TodoItemComponent {
    @Input()
    todos: TodoItem[] | null = [];

    @Output()
    deleteTodo = new EventEmitter<number>();

    onDelete(todoId: number) {
        this.deleteTodo.emit(todoId);
    }
}