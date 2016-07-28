import { Component, OnInit, Input } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { CAROUSEL_DIRECTIVES } from 'ng2-bootstrap/components/carousel';
import { GalleryImageService, Image } from './services/gallery-image.service';
import { Galleria } from 'primeng/components/galleria/galleria';

//Compoent Decorator
@Component({
	moduleId: module.id,
  	selector: 'gallery',
  	providers: [GalleryImageService],
  	directives: [Galleria],
  	template: `
  	<p-galleria [images]="images" panelWidth="400" panelHeight="300" showCaption="false"></p-galleria>
  	`,

})
export class GalleryComponent implements OnInit {
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



