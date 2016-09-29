import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'
import { NavBarComponent } from './navbar/navbar.component'
import { GalleryComponent } from './gallery/gallery.component'
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports:      [
        BrowserModule,
        Ng2BootstrapModule
    ],
    declarations: [
        AppComponent,
        NavBarComponent,
        GalleryComponent,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }