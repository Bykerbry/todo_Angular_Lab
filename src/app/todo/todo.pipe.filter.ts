import { Pipe, PipeTransform } from "@angular/core";
import { IToDo } from './todo.interface'

@Pipe({
    name: "taskFilter"
})

export class filterPipe implements PipeTransform {
    transform(value: IToDo[], filterValue: string): IToDo[] {
        if (!filterValue) {
            return value;
        }
        return value.filter(i => !i.task.toLowerCase().indexOf(filterValue.toLowerCase()));
    };
};
