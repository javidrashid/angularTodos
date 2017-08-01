import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {MdCardModule} from '@angular2-material/card';
import {MdButtonModule} from '@angular2-material/button';
import {MdIconModule} from '@angular2-material/icon';
import {MdIconRegistry} from '@angular2-material/icon';


import { AppComponent }  from './app.component';
import { TodosComponent }  from './todos/todos.component';
import { TodoService }  from './todos/todos.service';

@NgModule({
  imports:      [ MdCardModule, MdButtonModule, MdIconModule, BrowserModule, FormsModule],
  providers : [TodoService, MdIconRegistry],
  declarations: [ AppComponent,TodosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
