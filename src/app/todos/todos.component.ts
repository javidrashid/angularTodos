import { Component, OnInit } from "@angular/core";
import { Todo } from "./todos"
import { TodoService } from "./todos.service"


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
     ],
     providers : [TodoService]
    
    })


export class TodosComponent implements OnInit {
    todos : Todo[];
    constructor(private _todosService : TodoService) {}

    ngOnInit() : void{
        this.todos = this._todosService.getTodos();
    }
    addAToDo(todo: string) : void {
        console.log("e");
    }
}