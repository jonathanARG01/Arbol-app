import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogrosPage } from './logros.page';



const routes: Routes = [
  	{
    	path: '',
    	component: LogrosPage,
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



export class LogrosPageRoutingModule {}
