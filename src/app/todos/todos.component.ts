import { Component } from "@angular/core";

@Component({
    selector : 'todos',
    templateUrl : './todos.component.html',
    styleUrls : ['./todos.component.css' ],
    styles :  [
        `
        .todolist-container {
                min-height:900px;
                background: #c0c0c0;
            `
     ]
    }
)

export class TodosComponent {

}