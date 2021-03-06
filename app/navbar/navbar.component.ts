import { Component, Input, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { TabsModule } from 'ng2-bootstrap/components/tabs';
import { GalleryService, Gallery } from '../gallery/services/gallery.service';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'gallery-nav',
  providers: [GalleryService],
  templateUrl: 'app/navbar/navbar.component.html',
  styleUrls: ['app/navbar/navbar.component.css']

  //WIP this is not functional yet

  //@tabState="[active].toString()" //removed from <tab></tab>
  //animations: [
  //trigger('tabState', [
  //  state('false', style({
  //    backgroundColor: '#e0e2e4'
  //  })),
  //  state('true', style({
  //    backgroundColor: 'black'
  //  })),
  //  transition('false => true', animate('200ms ease-in')),
  //  transition('true => false', animate('200ms ease-out'))
  //  ])
  //]

})

export class NavBarComponent implements OnInit {
	componentName: 'NavBarComponent';
	galleries: Gallery[];

	constructor(private _galleryService: GalleryService) { };

  getGalleries() {
    this.galleries = this._galleryService.getGalleries();
  }

  ngOnInit() {
    this.getGalleries();
    }

  selectTab(event: any) {
    //console.log('select', event)
    // need this for later
  }
  deselectTab(event: any) {
    //console.log('deselect', event)
    // might need this for later
  }
}