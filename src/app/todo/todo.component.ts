import { Component, OnInit, ViewChild } from '@angular/core';
import { IToDo } from './todo.interface'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @ViewChild('filterInput', {static: false}) filterInput: any;
  
  toDoList: IToDo[];
  addToDo: string;
  filterValue: string;

  constructor() { 
    this.toDoList = [
      { task: "Grocery Shopping", completed: false },
      { task: "Cook Dinner", completed: false },
      { task: "Let Dog Out", completed: false },
      { task: "Brush Teeth", completed: false }
    ]
  };

  addItem(){
    this.toDoList.push({ task: this.addToDo, completed: false });
    this.addToDo = '';
  };

  removeItem(i: number) {
    this.toDoList.splice(i, 1);
  };

  // logger() {
  //   console.log(this.toDoList);
  // }

  ngOnInit() {
  }

}
