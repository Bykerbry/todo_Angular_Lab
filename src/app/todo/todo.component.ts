import { Component, OnInit, ViewChild } from '@angular/core';
import { IToDo } from './todo.interface'

@Component({
  selector: 'app-todo',
  providers: [],
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
      { task: "Grocery Shopping", completed: false, beingEdited: false },
      { task: "Cook Dinner", completed: false, beingEdited: false  },
      { task: "Let Dog Out", completed: false, beingEdited: false  },
      { task: "Brush Teeth", completed: false, beingEdited: false  }
    ]
  };

  addTask(){
    this.toDoList.push({ task: this.addToDo, completed: false, beingEdited: false  });
    this.addToDo = '';
  };

  removeTask(i: number, filterValue: string, task: IToDo) {
    if (filterValue) {
      this.toDoList.splice(task.id, 1);
    } else {
      this.toDoList.splice(i, 1);
    }
  };

  editTask(e: Event, task: IToDo) {
    task.beingEdited = true;
    let target = e.target as HTMLButtonElement;
    target.blur();
  }

  updateTask(newText: string, task: IToDo) {
    task.task = newText;
    newText = '';
    task.beingEdited = false;
  }

  ngOnInit() {
  }

}
