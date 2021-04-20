import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Usuario } from '../../interfaces/interfaces';

import { NgForm } from '@angular/forms';

// Services
import { UsuarioService } from '../../services/usuario.service';
import { UiServiceService } from '../../services/ui-service.service';



@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.page.html',
	styleUrls: ['./perfil.page.scss'],
})



export class PerfilPage implements OnInit {


	usuario: Usuario = {}

	
	constructor( private modalController: ModalController,
				 private usuarioService: UsuarioService,
				 private uiService: UiServiceService ) { }

	
	ngOnInit() {
		this.usuario = this.usuarioService.getUsuario();
		console.log(this.usuario);
	}


	regresar() {
		this.modalController.dismiss();
	}

	
	async actualizar( fActualizar: NgForm ) {
		
		if ( fActualizar.invalid ) {
			console.log('NO valido');
			return;
		} else {
			console.log('valido');
		}

		const actualizado = await this.usuarioService.actualizarUsuario( this.usuario );

		console.log(actualizado);

		if ( actualizado ) {
			this.uiService.presentToast('Usuario actualizado');
		} else {
			this.uiService.presentToast('No se pudo actualizar el usuario');
		}

	}

}
