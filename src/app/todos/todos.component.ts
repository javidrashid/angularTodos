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
    todo: any
    todoName: string;

    constructor(private _todosService : TodoService) {}

    ngOnInit() : void{
        this.todos = this._todosService.getTodos();
    }
    addAToDo(todo: Todo[]) : void {
        console.log(this.todos);
        console.log({todoName : this.todo});
        this.todos.push({todoName: this.todo});
    }
}