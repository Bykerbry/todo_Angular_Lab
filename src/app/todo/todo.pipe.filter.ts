import { Pipe, PipeTransform } from "@angular/core";
import { IToDo } from './todo.interface'

@Pipe({
    name: "taskFilter"
})

export class filterPipe implements PipeTransform {
    transform(todoList: IToDo[], filterValue: string): IToDo[] {
        if (!filterValue) {
            return todoList;
        }
        todoList.map((item, index) => item.id = index)
        return todoList.filter(listItem => !listItem.task.toLowerCase().indexOf(filterValue.toLowerCase()));
    };
};
