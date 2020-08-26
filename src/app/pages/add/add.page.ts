import { Component, OnInit } from '@angular/core';
import { WishesService } from 'src/app/services/wishes.service';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { TaskListItem } from 'src/app/models/task-list-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List;
  nameItemList = '';

  constructor( private wishesService: WishesService,
               private route: ActivatedRoute ) { 
    
    const listId = this.route.snapshot.paramMap.get('listId');    
    this.list = this.wishesService.loadList( listId );   
    
  }

  ngOnInit() {}

  addItem() {
    if ( this.nameItemList.length === 0) {
      return;
    }

    const newItem = new TaskListItem( this.nameItemList );
    this.list.items.push( newItem );

    this.nameItemList = '';
    this.wishesService.saveStorage();
  }

}
