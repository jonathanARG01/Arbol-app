import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BosquePage } from './bosque.page';

import { BosquePageRoutingModule } from './bosque-routing.module';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  	imports: [
    	IonicModule,
    	CommonModule,
    	FormsModule,
    	BosquePageRoutingModule,
		ComponentsModule
  	],
  	declarations: [
		BosquePage
	]
})



export class BosquePageModule {}
