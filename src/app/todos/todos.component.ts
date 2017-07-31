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
    remainingTodos: any;

    constructor(private _todosService : TodoService) {}

    ngOnInit() : void{
        this.todos = this._todosService.getTodos();
        console.info(this._todosService.getTodos());
        this._todosService.getTodos().forEach(function(elem, i) {
            var self = this;
            var remainingTodos = 0;
             if(elem.status === true) {
                
              remainingTodos += remainingTodos
           }
       })
    }
    addAToDo(todo: Todo[]) : void {
        console.log(todo);
        this.todos.push({todoName : this.todo, status: false});
        this.todo = '';
        var remainingTodos = 0;
        this.remainingTodos = this.todos.forEach(function(elem , i) {
            if(elem.status === true) {
                remainingTodos += 1;
            }
        });
        console.log(remainingTodos);
    }
    mouseMoved(todo : Todo[]) {
        //console.log(todo);
        // var allTodos = this.todos;
        // var self = this;
        // var alreadyDone = false;
        // allTodos.forEach(function(elem, i) {
        //     //console.info(todo)
        //     // if(allTodos[i].todoName == todo) {
        //     //    self.alreadyDone = true;
        //     // }
        //     alreadyDone = false;
        // })
         
    }
    todoDone(todo : Todo[]) {
        console.log(this);
        if(this.status === false) {
            console.log('task is incomplete');
           this.remainingTodos = this.todos.length - 1;
            this.todos.forEach((elem, i) => {
                if(elem.status === true) {
                    this.remainingTodos -= 1;
                }
                else {
                    this.remainingTodos = this.remainingTodos;
                }
            })
           
            //console.log(this.remainingTodos);
        }
        else {
            console.log('completed');
        }
         return this.remainingTodos;
    }
    setAllAsDone() {
        console.log('sss');
        this.todos.forEach(function(elem, i) {
            console.log(elem);
            elem.status = true;

        })
    }
}