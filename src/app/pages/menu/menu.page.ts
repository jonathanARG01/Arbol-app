import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

// Barcode Scanner
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

// Servicios
import { RegistrosService } from '../../services/registros.service';

// Pages
import { PerfilPage } from '../perfil/perfil.page';



@Component({
	selector: 'app-menu',
	templateUrl: './menu.page.html',
	styleUrls: ['./menu.page.scss'],
})



export class MenuPage {

	
	constructor( private modalController: ModalController,
				 private barcodeScanner: BarcodeScanner,
				 private registro: RegistrosService ) { }


	regresar() {
		this.modalController.dismiss();
	}


	infoQr: any = '';
	errorQr: any = '';

	scan() {
		
		this.barcodeScanner.scan().then(barcodeData => {
			this.infoQr = barcodeData;
		}).catch(err => {
			this.errorQr = err;
		});


		this.barcodeScanner.scan()
			.then( barcodeData => {
				console.log('Barcode data', barcodeData);
				if ( !barcodeData.cancelled ) {
					this.registro.guardarRegistro( barcodeData.format, barcodeData.text );
				}
			})
			.catch( err => {
				console.log('Error', err);
				this.registro.guardarRegistro( 'QRCode', 'https://bauldecamisetas.com' );
			});

	}


	verMapa() {
		console.log('Abriendo mapa');
	}


	async irPerfil() {
		
		console.log('Ir al perfil');
		
		const modal = await this.modalController.create({
		  	component: PerfilPage
		});

		return await modal.present();
	
	}


}
