import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo.models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
todoUrl="https://jsonplaceholder.typicode.com/todos";
todosLimit="?_limit=5";
  constructor(private http:HttpClient) { }

  //GET
getTodos():Observable<Todo[]>{
  return this.http.get<Todo[]>(`${this.todoUrl}${this.todosLimit}`);
}
  //DELET

  //POST
}
