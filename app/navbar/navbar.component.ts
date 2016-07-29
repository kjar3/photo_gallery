import { Component, Input, trigger, state, style, transition, animate } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { TAB_DIRECTIVES } from 'ng2-bootstrap/components/tabs';
import { GalleryService, Gallery } from '../gallery/services/gallery.service'
import { GalleryComponent } from '../gallery/gallery.component'

@Component({
  selector: 'gallery-nav',
  providers: [GalleryService],
  directives: [TAB_DIRECTIVES, CORE_DIRECTIVES, GalleryComponent],
  templateUrl: 'app/navbar/navbar.component.html',
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
  `],

  //this is not functional yet
  animations: [
  trigger('tabState', [
    state('false', style({
      backgroundColor: '#e0e2e4'
    })),
    state('true', style({
      backgroundColor: 'black'
    })),
    transition('false => true', animate('200ms ease-in')),
    transition('true => false', animate('200ms ease-out'))
    ])
  ]

})

export class NavBarComponent {
	componentName: 'NavBarComponent';
	galleries: Gallery[];

	constructor(private _galleryService: GalleryService) { }

  getGalleries() {
    this.galleries = this._galleryService.getGalleries();
  }

  ngOnInit() {
    this.getGalleries();
    }

  selectTab(event: any) {
    // need this for later
  }
  deselectTab(event: any) {
    // might need this for later
  }
}