import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  selectedTodo: any ;
  constructor(public todoService: TodoServiceService) { }

  ngOnInit() {
  }

  deleteTodo(selectedTodo) {
    const index = this.todoService.todoList.indexOf(selectedTodo);
    console.log(index);

    this.todoService.todoList.splice(index, 1);
    console.log(this.todoService.todoList);
  }
  editTodo(selectedTodo, object) {

    this.todoService.todoList[this.todoService.todoList.indexOf(selectedTodo)] = object;


  }

  selectTodo(selectedTodo: object) {
    this.selectedTodo = selectedTodo;
    console.log(selectedTodo);
  }

}
