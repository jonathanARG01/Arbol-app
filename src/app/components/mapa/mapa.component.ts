import { Component, Input, ViewChild } from '@angular/core';



declare var mapboxgl: any;



@Component({
	selector: 'app-mapa',
	templateUrl: './mapa.component.html',
	styleUrls: ['./mapa.component.scss'],
})



export class MapaComponent {


	@Input() coords: string;
	@ViewChild('mapa', { static: true }) mapa: any;
	

	constructor() { }


	ngAfterViewInit() {
		
		const latLng = this.coords.split(',');
		const lat = Number(latLng[0]);
		const lng = Number(latLng[1]);

		mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uYXRoYW5zdyIsImEiOiJja211N2M2cTgweXFsMm9sbWMyNDNndzU3In0.KH1W6l4ZnCRj7J07wkBIcw';
		
		const map = new mapboxgl.Map({
			container: this.mapa.nativeElement,
			style: 'mapbox://styles/mapbox/light-v10',
			zoom: 14,
			center: [lng, lat],
			pitch: 40
		});

		const marker = new mapboxgl.Marker()
			.setLngLat( [lng, lat] )
			.addTo( map );

		const marker2 = new mapboxgl.Marker()
			.setLngLat( [lng+0.0001, lat] )
			.addTo( map );
		
		const marker3 = new mapboxgl.Marker()
			.setLngLat( [lng, lat+0.0001] )
			.addTo( map );


		map.on('load', function () {

			map.addSource('ethnicity', {
				type: 'vector',
				url: 'mapbox://examples.8fgz4egr'
			});

			map.addLayer({
				'id': 'population',
				'type': 'circle',
				'source': 'ethnicity',
				'source-layer': 'sf2010',
				'paint': {
					// make circles larger as the user zooms from z12 to z22
					'circle-radius': {
						'base': 1.75,
						'stops': [
							[12, 2],
							[22, 180]
						]
					},
					// color circles by ethnicity, using a match expression
					// https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
					'circle-color': [
						'match',
						['get', 'ethnicity'],
						'White',
						'#fbb03b',
						'Black',
						'#223b53',
						'Hispanic',
						'#e55e5e',
						'Asian',
						'#3bb2d0',
						'#ccc'
					]
				}
			});

		});

	}

	
}
