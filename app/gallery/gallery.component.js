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
var gallery_image_service_1 = require('./services/gallery-image.service');
var galleria_1 = require('primeng/components/galleria/galleria');
//Compoent Decorator
var GalleryComponent = (function () {
    function GalleryComponent(galleryService) {
        this.galleryService = galleryService;
    }
    GalleryComponent.prototype.getImages = function (galleryId) {
        this.images = this.galleryService.getImages(galleryId);
    };
    GalleryComponent.prototype.ngOnInit = function () {
        this.getImages(this.galleryId);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], GalleryComponent.prototype, "galleryId", void 0);
    GalleryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'gallery',
            providers: [gallery_image_service_1.GalleryImageService],
            directives: [galleria_1.Galleria],
            template: "\n  \t<p-galleria [images]=\"images\" panelWidth=\"400\" panelHeight=\"300\" showCaption=\"true\"></p-galleria>\n  \t",
        }), 
        __metadata('design:paramtypes', [gallery_image_service_1.GalleryImageService])
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;
//# sourceMappingURL=gallery.component.js.map