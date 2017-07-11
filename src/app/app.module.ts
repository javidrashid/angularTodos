import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TodosComponent }  from './todos/todos.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,TodosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
