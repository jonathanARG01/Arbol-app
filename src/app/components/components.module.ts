import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// Components
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';

// Pipes
import { PipesModule } from '../pipes/pipes.module';
import { MapaComponent } from './mapa/mapa.component';



@NgModule({
	declarations: [
		PostsComponent,
		PostComponent,
		MapaComponent
	],
	imports: [
		CommonModule,
		IonicModule,
		PipesModule
	],
	exports: [
		PostsComponent
	]
})



export class ComponentsModule { }
