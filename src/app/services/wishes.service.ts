import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  taskList: List[] = [];

  constructor() {
    
    const listOne = new List('Recolectar piedras del infinito');
    const listTwo = new List('Salvar al mundo');

    this.taskList.push(listOne, listTwo);

    
   }


}
