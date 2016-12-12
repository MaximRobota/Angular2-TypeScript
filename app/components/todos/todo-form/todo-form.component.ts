import { Component, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../../shared/todo.model';

@Component({
    selector: 'todo-form',
    templateUrl: './app/components/todos/todo-form/todo-form.component.html',
    styleUrls: ['./app/components/todos/todo-form/todo-form.component.css']
})
export class TodoFormComponent {
    @Output() created: EventEmitter<Todo>;

    constructor() {
        this.created = new EventEmitter<Todo>();
    }

    create(title: string) {
        if (title) {
            let todo = new Todo(title);
            this.created.emit(todo);
        }
    }
}