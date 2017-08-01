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
    showText : string

    constructor(private _todosService : TodoService) {}

    ngOnInit() : void{
        this.todos = this._todosService.getTodos();
        this.remainingTodos = this.todos.length;
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
        this.remainingTodos = this.todos.forEach((elem , i) => {
            if(elem.status === true) {
                remainingTodos += 1;
            }
        });
        console.log(remainingTodos);
        return this.remainingTodos;
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
        this.remainingTodos = this.todos.length;
          console.log('task is incomplete');
        this.todos.forEach((elem , i) => {
            if(elem.status === true) {
                this.remainingTodos -= 1;
            }
            else {
                this.remainingTodos += 1;
            }
             
        });
 
        return this.remainingTodos;
    }
    setAllAsDone() {
        if(this.todos.length === 4) {
            
            this.showText = "Done"
        }
        else {
            this.showText = "Not Done"
        }
}