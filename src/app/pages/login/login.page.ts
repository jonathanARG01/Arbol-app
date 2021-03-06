import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { UiServiceService } from '../../services/ui-service.service';
import { Usuario } from '../../interfaces/interfaces';



@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})



export class LoginPage implements OnInit {


	@ViewChild('slidePrincipal') slides: IonSlides;


	avatars = [
		{
		  img: 'av-1.png',
		  seleccionado: true
		},
		{
		  img: 'av-2.png',
		  seleccionado: false
		},
		{
		  img: 'av-3.png',
		  seleccionado: false
		},
		{
		  img: 'av-4.png',
		  seleccionado: false
		},
		{
		  img: 'av-5.png',
		  seleccionado: false
		},
		{
		  img: 'av-6.png',
		  seleccionado: false
		},
		{
		  img: 'av-7.png',
		  seleccionado: false
		},
		{
		  img: 'av-8.png',
		  seleccionado: false
		}
	];


	avatarSlide = {
		slidesPerView: 3.5
	}


	loginUser = {
		email: 'jonathansw01@gmail.com',
		password: '123456'
	}


	registerUser: Usuario = {
		email: 'test',
		password: '123456',
		nombre: 'test',
		avatar: 'av-1.png'
	}


	constructor( private usuarioService: UsuarioService,
		 		 private navCtrl: NavController,
				 private uiService: UiServiceService ) { }


	ngOnInit() {
		
	}


	ionViewDidEnter() {
		this.slides.lockSwipes( true );
	}


    // login() {

    //     this.navCtrl.navigateRoot('/main/tabs/arbol', { animated: true });

	// }


	async login( fLogin: NgForm ) {

		if ( fLogin.invalid ) { return;	}

		const valido = await this.usuarioService.login( this.loginUser.email, this.loginUser.password );

		if ( valido ) {
			this.navCtrl.navigateRoot('/main/tabs/arbol', { animated: true });
		} else {
			this.uiService.alertaInformativa('Usuario y/o contraseña no son correctos');
		}
	
	}


	async registro( fRegistro: NgForm ) {
		
		if ( fRegistro.invalid ) { return; }
		
		const valido = await this.usuarioService.registro( this.registerUser );

		if ( valido ) {
			this.navCtrl.navigateRoot('/main/tabs/arbol', { animated: true });
		} else {
			this.uiService.alertaInformativa('Ese correo electronico ya existe');
		}

	}


	seleccionarAvatar( avatar ) {
		this.avatars.forEach( av => av.seleccionado = false );
		avatar.seleccionado = true;
	}


	mostrarRegistro() {
		this.slides.lockSwipes( false );
		this.slides.slideTo(0);
		this.slides.lockSwipes( true );
	}


	mostrarLogin() {
		this.slides.lockSwipes( false );
		this.slides.slideTo(1);
		this.slides.lockSwipes( true );
	}


}
