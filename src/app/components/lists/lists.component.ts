import { Component, OnInit, Input } from '@angular/core';
import { List } from 'src/app/models/list.model';
import { Router } from '@angular/router';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() completeTask = true;

  constructor(public wishesService: WishesService,
              private router: Router) { }

  ngOnInit() {}

  goToTaskList( list: List ) {

    if (this.completeTask) {
      this.router.navigateByUrl(`tabs/tab2/add/${ list.id }`);
    } else {
    this.router.navigateByUrl(`tabs/tab1/add/${ list.id }`);
    }
  }

  delete( list: List ) {
    this.wishesService.deleteList( list );
  }

}
