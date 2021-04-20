import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArbolPage } from './arbol.page';

import { ArbolPageRoutingModule } from './arbol-routing.module';



@NgModule({
  	imports: [
    	IonicModule,
    	CommonModule,
    	FormsModule,
    	ArbolPageRoutingModule
  	],
  	declarations: [
		ArbolPage
	]
})



export class ArbolPageModule {}
