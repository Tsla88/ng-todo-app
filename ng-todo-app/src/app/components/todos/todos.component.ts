import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo.models';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos:Todo[]=[];
  constructor() { }

  ngOnInit(): void {
    this.todos=[
      {
        "id": 1,
        "title": "Buy fruits",
        "description": "Buy fresh fruits from market",
        "completed": true
      },
      {
        "id": 2,
        "title": "Buy devises",
        "description": "Buy fresh fruits from market2",
        "completed": false
      }
    ]
  }

}
