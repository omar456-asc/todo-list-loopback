import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }
