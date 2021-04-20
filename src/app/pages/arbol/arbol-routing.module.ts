import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArbolPage } from './arbol.page';



const routes: Routes = [
  	{
    	path: '',
    	component: ArbolPage,
  	}
];



@NgModule({
  	imports: [
		RouterModule.forChild(routes)
	],
  	exports: [
		RouterModule
	]
})



export class ArbolPageRoutingModule {}
