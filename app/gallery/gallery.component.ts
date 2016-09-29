import { Component, Input } from '@angular/core';
import { GalleryImageService, Image } from './services/gallery-image.service'

 
@Component({
	selector: 'gallery',
  	providers: [GalleryImageService],
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



