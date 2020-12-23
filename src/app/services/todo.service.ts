import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo.model';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    _baseUrl = 'http://localhost:4280/todos';

    constructor(private httpClient: HttpClient) { }
    
    private getCollectionUrl() {
        return this._baseUrl;
    }

    private getItemPath(id: number | string) {
        return this._baseUrl + '/' + encodeURIComponent(String(id));
    }

    public all() {
        return this.httpClient.get<TodoItem[]>(this.getCollectionUrl());
    }

    public add(todo: TodoItem) {
        return this.httpClient.post<TodoItem>(this.getCollectionUrl(), todo);
    }

    public delete(todoId: number) {
        return this.httpClient.delete<TodoItem>(this.getItemPath(todoId));
    }
}