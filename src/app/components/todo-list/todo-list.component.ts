import { TodoItem } from './../../models/todo.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'todo-list', 
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.sass']
})

export class TodoListComponent {
    @Input()
    todos: TodoItem[] | null = [];

    @Output()
    deleteTodo = new EventEmitter<number>(); 

    constructor() {
        console.log("todos", this.todos);
    }

    onDelete(todoId: number) {
        this.deleteTodo.emit(todoId);
    }
}