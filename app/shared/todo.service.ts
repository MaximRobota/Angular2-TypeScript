import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ITodo } from './todo.model';

@Injectable()
export class TodoService {
    private apiUrl = 'api/todos';

    constructor(private http: Http) {}

    getTodos(): Promise<ITodo[]> {
        return this.http.get(this.apiUrl)
                        .toPromise()
                        .then(res => res.json().data)
                        .catch(this.handleError);
    }

    addTodo(todo: ITodo): Promise<ITodo> {
        return this.post(todo);
    }

    saveTodo(todo: ITodo): Promise<ITodo> {
        return this.put(todo);
    }

    deleteTodo(todo: ITodo): Promise<ITodo> {
        return this.delete(todo);
    }

    private post(todo: ITodo): Promise<ITodo> {
        let body = JSON.stringify(todo);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        return this.http.post(this.apiUrl, body, options)
                        .toPromise()
                        .then(res => res.json().data)
                        .catch(this.handleError)
    }

    private put(todo: ITodo): Promise<ITodo> {
        let body = JSON.stringify(todo);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        let url = `${this.apiUrl}/${todo.id}`;

        return this.http.put(url, body, options)
                        .toPromise()
                        .then(res => todo)
                        .catch(this.handleError);
    }

    private delete(todo: ITodo): Promise<ITodo> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        let url = `${this.apiUrl}/${todo.id}`;

        return this.http.delete(url, options)
                        .toPromise()
                        .then(res => todo)
                        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.log('Произошла ошибка', error);
        return Promise.reject(error.message || error);
    }
}