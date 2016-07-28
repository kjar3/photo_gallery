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
  public slides:Array<any> = [];
 
  constructor(private galleryService: GalleryImageService) { }

	getImages(galleryId: number) {
		this.images = this.galleryService.getImages(galleryId)
	}

	ngOnInit() {
    	this.getImages(this.galleryId);
  	}

  // public constructor() {
  //   for (let i = 0; i < 4; i++) {
  //     this.addSlide();
  //   }
  // }

  
 
  // public addSlide():void {
  //   let newWidth = 600 + this.slides.length + 1;
  //   this.slides.push({
  //     image: `//placekitten.com/${newWidth}/300`,
  //     text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
  //     ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
  //   });
  // }
 
  // public removeSlide(index:number):void {
  //   this.slides.splice(index, 1);
  // }
}



