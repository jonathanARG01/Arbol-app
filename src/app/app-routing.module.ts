import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './guards/usuario.guard';



const routes: Routes = [
  	{
    	path: 'main',
    	loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
  		canLoad: [UsuarioGuard]
	},
  	{
    	path: 'login',
    	loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  	},
	{
		path: 'registros',
		loadChildren: () => import('./pages/registros/registros.module').then( m => m.RegistrosPageModule)
	},
	{
		path: '**',
    	pathMatch: 'full',
    	redirectTo: 'main/tabs/arbol'  
	},
  	{	
    	path: 'perfil',
    	loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  	},
  	{
    	path: 'ley',
    	loadChildren: () => import('./pages/ley/ley.module').then( m => m.LeyPageModule)
  	},
  	{
    	path: 'add',
    	loadChildren: () => import('./pages/add/add.module').then( m => m.AddPageModule)
  	}
];



@NgModule({
  	imports: [
    	RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  	],
  	exports: [
		RouterModule
	]
})



export class AppRoutingModule {}
