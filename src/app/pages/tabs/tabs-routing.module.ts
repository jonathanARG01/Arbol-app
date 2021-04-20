import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';



const routes: Routes = [
  	{
    	path: 'tabs',
    	component: TabsPage,
    	children: [
      		{
        		path: 'bosque',
        		loadChildren: () => import('../bosque/bosque.module').then(m => m.BosquePageModule)
      		},
      		{
        		path: 'arbol',
        		loadChildren: () => import('../arbol/arbol.module').then(m => m.ArbolPageModule)
      		},
      		{
        		path: 'logros',
        		loadChildren: () => import('../logros/logros.module').then(m => m.LogrosPageModule)
      		},
      		{
        		path: '',
        		redirectTo: '/tabs/bosque',
        		pathMatch: 'full'
      		}
    	]
  	},
  	{
    	path: '',
    	redirectTo: '/tabs/bosque',
    	pathMatch: 'full'
  	}
];



@NgModule({
  	imports: [
		RouterModule.forChild(routes)
	],
})



export class TabsPageRoutingModule {}
