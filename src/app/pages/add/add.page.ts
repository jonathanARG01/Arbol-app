import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PostsService } from '../../services/posts.service';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';



declare var window: any;



@Component({
	selector: 'app-add',
	templateUrl: './add.page.html',
	styleUrls: ['./add.page.scss'],
})



export class AddPage {

	
	tempImages: string[] = [];

	post = {
		mensaje: '',
		coords: null,
		posicion: false
	};

	cargandoGeo = false;


	constructor( private modalController: ModalController,
				 private postsService: PostsService,
				 private route: Router,
				 private geolocation: Geolocation,
				 private camera: Camera ) { }


	regresar() {
		this.modalController.dismiss();
	}


	async publicar() {
		
		console.log(this.post);
		const creado = await this.postsService.crearPost( this.post );

		this.post = {
			mensaje: '',
			coords: null,
			posicion: false
		};

		this.tempImages = [];

		this.route.navigateByUrl('main/tabs/bosque');
		this.modalController.dismiss();

	}


	getGeo() {

		if ( !this.post.posicion ) {
			this.post.coords = null;
			return;
		}

		this.cargandoGeo = true;

		this.geolocation.getCurrentPosition().then( (resp) => {

			this.cargandoGeo = false;
			const coords = `${ resp.coords.latitude }, ${ resp.coords.longitude }`;
			console.log(coords);

			this.post.coords = coords;

		}).catch( (error) => {
	
			this.cargandoGeo = false;
			console.log('Error al intentar obtener la ubicación', error);

		});

		console.log(this.post);
	
	}


	camara() {

		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.FILE_URI,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE,
			correctOrientation: true,
			sourceType: this.camera.PictureSourceType.CAMERA
		}

		this.procesarImagen( options );

	}


	libreria() {

		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.FILE_URI,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE,
			correctOrientation: true,
			sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
		}

		this.procesarImagen( options );

	}


	procesarImagen( options: CameraOptions ) {

		this.camera.getPicture(options)
			.then( (imageData) => {

				const img = window.Ionic.WebView.convertFileSrc( imageData );
				
				this.postsService.subirImagen( imageData );
				this.tempImages.push( img );
	
		}, (err) => {
			console.log( err );
		});

	}


}
