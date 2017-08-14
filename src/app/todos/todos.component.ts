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
         }
        #sortable li {
                border:1px solid red;
        }       
            `
     ],
     providers : [TodoService]
    
    })


export class TodosComponent implements OnInit {
    todos : Todo[];
    todo: any
    todoName: string;
    status : boolean = false;
    alreadyDone = false;
    doneTodos: number;
    remainingTodos: number;
    constructor(private _todosService : TodoService) {}

    ngOnInit() : void {
        this.todos = this._todosService.getTodos();
        console.info(this._todosService.getTodos());
        this.doneTodos = 0;
        this._todosService.getTodos().forEach((elem, i) =>
             {
                 if(elem.status === true) {
                    this.doneTodos += 1;
                }
             }
       )
            this.remainingTodos = this.todos.length - this.doneTodos;
           
    }
    addAToDo(todo: Todo[]) : Todo {
        console.log(todo);
        this.todos.push({todoName : this.todo, status: false});
        this.todo = '';
        this.remainingTodos++;
        return this.todo;
    }
    mouseMoved(todo : Todo[]) {
    }
    todoDone(e, todo : Todo[]) {
        console.log(this);
        if(e.target.checked) {
            console.log('status is true and checked');
           this.remainingTodos--;
     }
        else {
             this.remainingTodos++;
        }
    }
    setAllAsDone() {
        console.log('sss');
        this.todos.forEach(function(elem, i) {
            console.log(elem);
            elem.status = true;

        });
        this.remainingTodos = 0;
    }
}