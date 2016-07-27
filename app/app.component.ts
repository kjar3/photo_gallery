import { Component } from '@angular/core';
import {NavBarComponent} from './navbar/navbar.component';


@Component({
  selector: 'app',
  directives: [NavBarComponent],
  template: '<gallery-nav></gallery-nav>',
})
export class AppComponent { }