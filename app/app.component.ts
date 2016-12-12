import { Component } from '@angular/core';

import { Todo } from './shared/todo.model';
import { TodoService } from './shared/todo.service';
import { TodosComponent } from './components/todos/todos.component';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [TodosComponent],
    providers: [TodoService]
})
export class AppComponent {
    title: string;

    constructor() {
        this.title = 'Angular 2Do';
    }
}