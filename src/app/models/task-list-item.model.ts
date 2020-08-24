

export class TaskListItem {

    descrip: string;
    complete: boolean;

    constructor( descrip: string ) {
        this.descrip = descrip;
        this.complete = false; 
    }
    
}