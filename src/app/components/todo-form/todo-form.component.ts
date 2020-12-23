import { TodoItem } from './../../models/todo.model';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.sass']
})

export class TodoFormComponent {
    newTodo: string = '';

    @Output()
    addTodo = new EventEmitter<TodoItem>();

    onAddTodo() {
        let todo:TodoItem = {
            id: Math.floor(Math.random() * 1000),
            description: this.newTodo,
            date: Date.now().toLocaleString(),
            isComplete: false
        }

        this.addTodo.emit(todo);
        this.newTodo = '';
    }
}