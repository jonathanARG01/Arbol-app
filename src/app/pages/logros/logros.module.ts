import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogrosPage } from './logros.page';

import { LogrosPageRoutingModule } from './logros-routing.module';



@NgModule({
  	imports: [
    	IonicModule,
    	CommonModule,
    	FormsModule,
    	RouterModule.forChild([{ path: '', component: LogrosPage }]),
    	LogrosPageRoutingModule,
  	],
  	declarations: [
		LogrosPage
	]
})



export class LogrosPageModule {}
