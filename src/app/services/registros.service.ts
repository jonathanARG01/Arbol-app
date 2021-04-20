import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';

import { Storage } from '@ionic/storage-angular';



@Injectable({
	providedIn: 'root'
})



@Injectable({
	providedIn: 'root'
})



export class RegistrosService {


	guardados: Registro[] = [];
	seguidos: Registro[] = [];
	noSeguidos: Registro[] = [];


  	constructor( private storage: Storage) {
		this.cargarStorage();
	}



	guardarEnSeguidos( registro: Registro ) {

		this.seguidos.unshift( registro );
		console.log('SEGUIDOS: ', this.seguidos);
		console.log('NO SEGUIDOS: ', this.noSeguidos);

	}


	getSeguidos() {

		console.log('DESDE LA FUNCION');
		console.log(this.seguidos);

	}


	async cargarStorage() {
		this.storage.create();
		this.guardados = (await this.storage.get('registros')) || [];
	}


	async ngOnInit() {
		await this.storage.create();
	}

	
    async guardarRegistro( format: string, text: string ) {

		await this.cargarStorage();

        const nuevoRegistro = new Registro( format, text );
		this.guardados.unshift( nuevoRegistro );
		console.log(this.guardados);

		this.storage.set('registros', this.guardados);

	}



	enviarCorreo() {
        console.log('Enviando correo');
	}



}
