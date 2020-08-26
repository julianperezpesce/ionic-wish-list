import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  taskList: List[] = [];

  constructor() {    
    
    this.loadStorage();
    
   }

   createList ( titulo: string ) {

    const newList = new List(titulo);
    this.taskList.push( newList );
    this.saveStorage();

    return newList.id;
  }

  loadList ( id: string | number ) {

    id = Number(id);

    return this.taskList.find( listData => listData.id === id );
  }

  saveStorage() {

    localStorage.setItem('data', JSON.stringify(this.taskList));
  }

  loadStorage() {

    if ( localStorage.getItem('data') ) {
      this.taskList = JSON.parse( localStorage.getItem('data') );
    } else {
      this.taskList = [];
    }    
    
  }


}
