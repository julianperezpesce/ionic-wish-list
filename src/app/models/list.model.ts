import { TaskListItem } from './task-list-item.model';


export class List {

    id: number;
    title: string;
    startDate: Date;
    endDate: Date;
    complete: boolean;
    items: TaskListItem[];

    constructor( title: string ) {
        this.title = title;
        this.startDate = new Date();
        this.complete = false;
        this.items = [];

        this.id = new Date().getTime();
    }
}