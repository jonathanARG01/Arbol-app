import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';



@Injectable({
	providedIn: 'root'
})



export class UsuarioGuard implements CanLoad {
	

	constructor( private usuarioService: UsuarioService ) { }

	
	// Proteger rutas al momento de cargar (validando el token)
	canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
		return this.usuarioService.validaToken();
  	
	}


	// canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // 	return false;
  	// }

  
}
