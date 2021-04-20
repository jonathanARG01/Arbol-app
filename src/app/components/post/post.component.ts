import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../interfaces/interfaces';



@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss'],
})



export class PostComponent implements OnInit {


	@Input() post: Post = {};
	

	img1: string = '/assets/arboles/arbol4.jpg';
	img2: string = '/assets/arboles/arbol2.jpg';
	img3: string = '/assets/arboles/arbol1.jpg';

	
	constructor() { }

	
	ngOnInit() {}


}
