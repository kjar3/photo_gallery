import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { TAB_DIRECTIVES } from 'ng2-bootstrap/components/tabs';
import { GalleryService, Gallery } from '../gallery/services/gallery.service'
import { CSSGalleryComponent } from '../gallery/gallery.component'


@Component({
  selector: 'gallery-nav',
  providers: [GalleryService],
  directives: [TAB_DIRECTIVES, CORE_DIRECTIVES, CSSGalleryComponent],
  template: `
        <tabset justified=true>
        <tab *ngFor="let gallery of galleries" [heading]="gallery.name"> 
          
          <div class="wrapper">
            <css-carousel [galleryId]="gallery.id"></css-carousel>
          </div>
        </tab>
        </tabset>
     
  			`,
  styles: [ `
  .wrapper {
    background: black;
    border-style: solid;
    border-color: black;
    border-width: 60px 60px 60px 60px;
  }
  `]

})

export class NavBarComponent {
	componentName: 'NavBarComponent';
	galleries: Gallery[];

	constructor(private _galleryService: GalleryService) {
		this.galleries = _galleryService.getGalleries();
	}
}