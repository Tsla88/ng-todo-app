import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo.models';
import { TodoService } from 'src/app/services/todo.service';
// import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos:Todo[]=[];
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos=>{
      this.todos=todos;
    })
      
    // this.todos=[
    //   {
    //     "id": 1,
    //     "title": "Buy fruits",
    //     "completed": true
    //   },
    //   {
    //     "id": 2,
    //     "title": "Buy devises",
    //     "completed": false
    //   }
    // ]
  }

}
