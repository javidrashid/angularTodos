import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TodosComponent }  from './todos/todos.component';
import { TodoService }  from './todos/todos.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  providers : [TodoService],
  declarations: [ AppComponent,TodosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
