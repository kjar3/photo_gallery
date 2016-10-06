import { Component, Input, OnInit } from '@angular/core';
import { GalleryImageService, Image } from './services/gallery-image.service'

 
@Component({
	selector: 'gallery',
  	providers: [GalleryImageService],
  	templateUrl: 'app/gallery/gallery.component.html'

})

export class GalleryComponent implements OnInit {
	@Input() galleryId: number;
	images: Image[];
 	defaultInterval:number = 0;
  	noWrapSlides:boolean = false;
 
	constructor(private galleryImageService: GalleryImageService) { }

	getImages(galleryId: number) {
		this.images = this.galleryImageService.getImages(galleryId)
	}

	ngOnInit() {
    	this.getImages(this.galleryId);
  	}
}



