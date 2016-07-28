import { Component, OnInit, Input } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { CAROUSEL_DIRECTIVES } from 'ng2-bootstrap/components/carousel';
import { GalleryImageService, Image } from './services/gallery-image.service'

//Compoent Decorator
@Component({
	moduleId: module.id,
  	selector: 'css-carousel',
  	providers: [GalleryImageService],
  	template: `
		<div class="carousel">
		  <ul class="slides">
		    <li *ngFor="let image of images">
		     	<img src="{{image.url}}" alt="">
		    </li>
		  </ul>
		</div>
	  `,

	//todo use styleUrls  
  	//styleUrls: ['gallery.component.css']
	styles: [`
		.carousel{
		    overflow:hidden;
		    width:100%;
		}
		.slides{
		    list-style:none;
		    position:relative;
		    width:500%; /* Number of panes * 100% */
		    overflow:hidden; /* Clear floats */
		        /* Slide effect Animations*/
		    -moz-animation:carousel 30s infinite;
		    -webkit-animation:carousel 30s infinite;
		    animation:carousel 30s infinite;
		}
		.slides > li{
		    position:relative;
		    float:left;
		    width: 20%; /* 100 / number of panes */
		}
		.carousel img{
		    display:block;
		    width:100%;
		    max-width:100%;
		}

		@keyframes carousel{
		    0%    { left:0%; }
		    11%   { left:0%; }
		    12.5% { left:-100%; }
		    23.5% { left:-100%; }
		    25%   { left:-200%; }
		    36%   { left:-200%; }
		    37.5% { left:-300%; }
		    48.5% { left:-300%; }
		    50%   { left:-400%; }
		    61%   { left:-400%; }
		    62.5% { left:-300%; }
		    73.5% { left:-300%; }
		    75%   { left:-200%; }
		    86%   { left:-200%; }
		    87.5% { left:-100%; }
		    98.5% { left:-100%; }
		    100%  { left:0%; }
		}
	`],
})


export class CSSGalleryComponent implements OnInit {
    images: Image[];
	@Input() galleryId: number;

	constructor(private galleryService: GalleryImageService) { }

	getImages(galleryId: number) {
		this.images = this.galleryService.getImages(galleryId)
	}

	ngOnInit() {
    	this.getImages(this.galleryId);
  	}
}



