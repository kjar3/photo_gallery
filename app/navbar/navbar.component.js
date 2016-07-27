"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var tabs_1 = require('ng2-bootstrap/components/tabs');
var gallery_service_1 = require('../gallery/services/gallery.service');
var gallery_component_1 = require('../gallery/gallery.component');
var NavBarComponent = (function () {
    function NavBarComponent(_galleryService) {
        this._galleryService = _galleryService;
        this.galleries = _galleryService.getGalleries();
    }
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'gallery-nav',
            providers: [gallery_service_1.GalleryService],
            directives: [tabs_1.TAB_DIRECTIVES, common_1.CORE_DIRECTIVES, gallery_component_1.CSSGalleryComponent],
            template: "\n    <div class=\"nav-wrapper\">\n      <tabset justified=true>\n        <tab *ngFor=\"let gallery of galleries\" [heading]=\"gallery.name\"> \n          <div class=\"gallery-wrapper\">\n            <css-carousel [galleryId]=\"gallery.id\"></css-carousel>\n          </div>\n        </tab>\n      </tabset>\n    </div>\n\t\t",
            styles: ["\n    .nav-wrapper {\n      margin-top: 10px\n    }\n\n    .gallery-wrapper {\n      background: black;\n      border-style: solid;\n      border-color: black;\n      border-width: 60px 60px 60px 60px;\n    }\n\n\n  "]
        }), 
        __metadata('design:paramtypes', [gallery_service_1.GalleryService])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map