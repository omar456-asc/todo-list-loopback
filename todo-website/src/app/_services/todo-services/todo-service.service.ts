import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get(`${this.apiUrl}/todos`);
  }

  addTodos(todo: any) {
    return this.http.post(`${this.apiUrl}/todos`, todo);
  }

  deleteTodos(id: any) {
    return this.http.delete(`${this.apiUrl}/todos/${id}`);
  }

  updateTodos(id: any, todo: any) {
    return this.http.put(`${this.apiUrl}/todos/${id}`, todo);
  }
}
