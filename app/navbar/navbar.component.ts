import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { TAB_DIRECTIVES } from 'ng2-bootstrap/components/tabs';
import { GalleryService, Gallery } from '../gallery/services/gallery.service'
import { GalleryComponent } from '../gallery/gallery.component'


@Component({
  selector: 'gallery-nav',
  providers: [GalleryService],
  directives: [TAB_DIRECTIVES, CORE_DIRECTIVES, GalleryComponent],
  template: `
    <div class="nav-wrapper">
      <tabset justified=true>
        <tab *ngFor="let gallery of galleries" [heading]="gallery.name"> 
          <div class="gallery-wrapper">
            <gallery [galleryId]="gallery.id"></gallery>
          </div>
        </tab>
      </tabset>
    </div>
		`,
  styles: [`
    .nav-wrapper {
      background: #e0e2e4;
      padding-top: 20px
    }

    .gallery-wrapper {
      background: black;
      border-style: solid;
      border-color: black;
      border-width: 50px 50px 50px 50px;
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