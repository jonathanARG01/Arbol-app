import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

// Interfaces
import { Post } from '../../interfaces/interfaces';

import { ModalController } from '@ionic/angular';
import { AddPage } from '../add/add.page';



@Component({
	selector: 'app-bosque',
	templateUrl: 'bosque.page.html',
	styleUrls: ['bosque.page.scss']
})



export class BosquePage implements OnInit {


	// Variables y constantes
	posts: Post[] = [];
	habilitado = true;

  	
	constructor( private postsService: PostsService,
				 private modalController: ModalController ) {}


	ngOnInit() {

		this.siguientes();
	
		this.postsService.nuevoPost
			.subscribe( post => {
				this.posts.unshift( post );
			});

	}


	// Recargar 'Posts'
	recargar() {
		this.siguientes( event, true );
		this.habilitado = true;
		this.posts = [];
	}


	// Mostrar más 'Posts' al hacer scroll
	siguientes( event?, pull: boolean = false ) {

		// Suscribirse al servicio para obtener los 'Posts' y almacenarlos en el arrays posts
		this.postsService.getPosts( pull )
			.subscribe( resp => {
				
				console.log( resp );

				this.posts.push( ...resp.posts );
			
				// Si es que existe el evento
				if ( event ) {
					
					event.target.complete();
					
					// Si no hay mas registros finaliza infinite scroll
					if ( resp.posts.length === 0 ) {
						this.habilitado = false;
					}

				}

			});

	}
	

	async crearPost() {
		
		const modal = await this.modalController.create({
			component: AddPage
	  	});

	  	return await modal.present();

	}


}
