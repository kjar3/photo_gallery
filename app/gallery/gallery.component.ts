import { Component, OnInit, Input } from '@angular/core';
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
  public myInterval:number = 1000;
  public noWrapSlides:boolean = false;
 
  constructor(private galleryService: GalleryImageService) { }

	getImages(galleryId: number) {
		this.images = this.galleryService.getImages(galleryId)
	}

	ngOnInit() {
    	this.getImages(this.galleryId);
  	}
}



