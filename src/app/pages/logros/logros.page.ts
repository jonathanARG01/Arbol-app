import { Component } from '@angular/core';



@Component({
	selector: 'app-logros',
	templateUrl: 'logros.page.html',
	styleUrls: ['logros.page.scss']
})



export class LogrosPage {


	logros: any[] = [
		{
			numero: 1,
			logro: 'Plantar mi 1° arbol',
			logrado: true
		},
		{
			numero: 2,
			logro: 'Subir una foto de mi arbol',
			logrado: true
		},
		{
			numero: 3,
			logro: 'Apoyar propuesta de ley',
			logrado: true
		},
		{
			numero: 4,
			logro: '10 días con mi arbol',
			logrado: false
		},
		{
			numero: 5,
			logro: '50 días con mi arbol',
			logrado: false
		},
		{
			numero: 6,
			logro: '100 días con mi arbol',
			logrado: false
		},
		{
			numero: 7,
			logro: '200 días con mi arbol',
			logrado: false
		},
		{
			numero: 8,
			logro: '300 días con mi arbol',
			logrado: false
		},
		{
			numero: 9,
			logro: '1 año con mi arbol',
			logrado: false
		},
		{
			numero: 10,
			logro: '500 días con mi arbol',
			logrado: false
		},
		{
			numero: 11,
			logro: '2 años con mi arbol',
			logrado: false
		},
		{
			numero: 12,
			logro: '1000 días con mi arbol',
			logrado: false
		},
		{
			numero: 13,
			logro: '3 años con mi arbol',
			logrado: false
		},
		{
			numero: 14,
			logro: 'Escanear otro arbol',
			logrado: true
		},
		{
			numero: 15,
			logro: 'Escanear 10 arboles',
			logrado: false
		},
		{
			numero: 16,
			logro: 'Escanear 50 arboles',
			logrado: false
		},
		{
			numero: 17,
			logro: 'Escanear 100 arboles',
			logrado: false
		}
	];


	constructor() {}

		
}
