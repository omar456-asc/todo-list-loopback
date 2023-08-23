import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoServiceService } from 'src/app/_services/todo-services/todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  filter: 'all' | 'active' | 'done' = 'all';
  allItems: any;
  constructor(
    public todoService: TodoServiceService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.todoService.getTodos().subscribe((res) => {
      console.log(res);
      this.allItems = res;
    });
  }
  getitems() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item: any) =>
      this.filter === 'done' ? item.done : !item.done
    );
  }
}
