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
var gallery_service_1 = require('../gallery/services/gallery.service');
var NavBarComponent = (function () {
    function NavBarComponent(_galleryService) {
        this._galleryService = _galleryService;
    }
    NavBarComponent.prototype.getGalleries = function () {
        this.galleries = this._galleryService.getGalleries();
    };
    NavBarComponent.prototype.ngOnInit = function () {
        this.getGalleries();
    };
    NavBarComponent.prototype.selectTab = function (event) {
        console.log('select', event);
        // need this for later
    };
    NavBarComponent.prototype.deselectTab = function (event) {
        console.log('deselect', event);
        // might need this for later
    };
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'gallery-nav',
            providers: [gallery_service_1.GalleryService],
            templateUrl: 'app/navbar/navbar.component.html',
            styles: ["\n    .nav-wrapper {\n      background: #e0e2e4;\n      padding-top: 20px\n    }\n\n    .gallery-wrapper {\n      background: black;\n      border-style: solid;\n      border-color: black;\n      border-width: 50px 50px 50px 50px;\n    }\n  "],
            //this is not functional yet
            //@tabState="[active].toString()" //removed from <tab></tab>
            animations: [
                core_1.trigger('tabState', [
                    core_1.state('false', core_1.style({
                        backgroundColor: '#e0e2e4'
                    })),
                    core_1.state('true', core_1.style({
                        backgroundColor: 'black'
                    })),
                    core_1.transition('false => true', core_1.animate('200ms ease-in')),
                    core_1.transition('true => false', core_1.animate('200ms ease-out'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [gallery_service_1.GalleryService])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map