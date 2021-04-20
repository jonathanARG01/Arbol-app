import { Component } from '@angular/core';



@Component({
	selector: 'app-arbol',
	templateUrl: 'arbol.page.html',
	styleUrls: ['arbol.page.scss']
})



export class ArbolPage {


	arbol: string = 'assets/fondo/fondo1.jpg';


	datosArbol: any = {
		nombre: 'Araucaria',
		nombreCientifico: 'Araucaria araucana',
		imagen: 'assets/arboles/arbol2.jpg',
		fecha: '03/04/2021',
		tiempo: '117',
		codigo: '23167',
		qr: 'qr-code-outline'
	}
	

	constructor() {}


}
