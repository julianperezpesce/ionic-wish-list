import { Component } from '@angular/core';
import { WishesService } from 'src/app/services/wishes.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public wishesService: WishesService,
               private router: Router,
               private alertCtrl: AlertController) {

  }

  async addList() {
    
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');            
          }
        },
        {
          text: 'Crear lista',
          handler: ( data ) => {
            
            // Validate list
            if ( data.titulo.lenght === 0) {
              return;
            }
            // create list            
            const listId = this.wishesService.createList( data.titulo );

            //create list items
            this.router.navigateByUrl(`tabs/add/${ listId }`);
          }
        }
      ]
    });
    alert.present()

  }
}
