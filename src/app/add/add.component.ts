import { TodoServiceService } from '../todo-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor(public todoService: TodoServiceService) {}

  addList(object) {
    if (object === '') {
      window.alert(' Rentres une valeur !');
    } else {
      this.todoService.todoList.push(object);
      console.log(this.todoService.todoList);
    }
  }
  ngOnInit() {}
}
