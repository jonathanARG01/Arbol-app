import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';


@NgModule({
	declarations: [
		AppComponent
	],
	entryComponents: [

	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		HttpClientModule,
		IonicStorageModule.forRoot()
	],
	providers: [
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		BarcodeScanner,
		Geolocation,
		Camera,
		FileTransfer
	],
	bootstrap: [
		AppComponent
	]
})



export class AppModule {}
