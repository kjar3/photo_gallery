import { Component, Input } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { CAROUSEL_DIRECTIVES } from 'ng2-bootstrap/components/carousel';
import { GalleryImageService, Image } from './services/gallery-image.service'

 
@Component({
	selector: 'gallery',
  	providers: [GalleryImageService],
  	directives: [CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
  	templateUrl: 'app/gallery/gallery.component.html'
})

export class GalleryComponent {
	@Input() galleryId: number;
	images: Image[];
 	defaultInterval:number = 2;
  	noWrapSlides:boolean = false;
 
	constructor(private galleryImageService: GalleryImageService) { }

	getImages(galleryId: number) {
		this.images = this.galleryImageService.getImages(galleryId)
	}

	ngOnInit() {
    	this.getImages(this.galleryId);
  	}
}



