import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/_services/todo-services/todo-service.service';
import { Item } from 'src/app/_models/items';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  constructor(public todoService: TodoServiceService) {}
  todo: Item = {
    title: '',
    description: '',
    isComplete: false,
  };
  allItems: any;
  ngOnInit(): void {
    this.allItems = this.todoService.getTodos().subscribe((res) => {});
  }
  onSubmit() {
    this.todoService.addTodos(this.todo).subscribe((res) => {
      console.log(res);
      //Redirect to todos page
      window.location.href = '/todos';

      // this.todo = res;
    });
  }
}
