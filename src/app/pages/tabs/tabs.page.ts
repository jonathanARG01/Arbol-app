import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from 'src/app/pages/menu/menu.page';


@Component({
	selector: 'app-tabs',
	templateUrl: 'tabs.page.html',
	styleUrls: ['tabs.page.scss']
})



export class TabsPage {

	
	constructor( private modalController: ModalController ) {}


	async abrirMenu() {
		
		const modal = await this.modalController.create({
		  	component: MenuPage
		});

		return await modal.present();
	
	}


}
