import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { filterPipe } from './todo/todo.pipe.filter';
import { selectTextDirective } from './select.text.directive'

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    filterPipe,
    selectTextDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
