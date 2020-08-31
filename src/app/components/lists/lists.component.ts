import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { List } from 'src/app/models/list.model';
import { Router } from '@angular/router';
import { WishesService } from 'src/app/services/wishes.service';
import { AlertController, IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @ViewChild(IonItemSliding) slidingItem: IonItemSliding;
  @Input() completeTask = true;

  constructor(public wishesService: WishesService,
              private router: Router,
              private alertCtrl: AlertController) { }

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

  async listEdit( list: List ) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Editar lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: list.title,
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar'); 
            
             //this close the slide button edit - create
            this.slidingItem.closeOpened();           
          }
        },
        {
          text: 'Actualizar lista',
          handler: ( data ) => {
            
            // Validate list
            if ( data.titulo.lenght === 0) {
              return;
            }
            // edit list            
            list.title = data.titulo;
            this.wishesService.saveStorage();

            //this close the slide button edit - create
            this.slidingItem.closeOpened();
          }
        }
      ]
    });
    
    alert.present()
  }
}
