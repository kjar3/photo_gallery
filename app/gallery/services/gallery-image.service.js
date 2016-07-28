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
var GalleryImageService = (function () {
    function GalleryImageService() {
        this.images = {
            1: [
                { "title": "A1", "url": "gallery_images/A1.jpg" },
                { "title": "A2", "url": "gallery_images/A2.jpg" },
                { "title": "A3", "url": "gallery_images/A3.jpg" },
                { "title": "A4", "url": "gallery_images/A4.jpg" },
                { "title": "A5", "url": "gallery_images/A5.jpg" }
            ],
            2: [
                { "title": "B1", "url": "gallery_images/B1.jpg" },
                { "title": "B2", "url": "gallery_images/B2.jpg" },
                { "title": "B3", "url": "gallery_images/B3.jpg" },
                { "title": "B4", "url": "gallery_images/B4.jpg" },
                { "title": "B5", "url": "gallery_images/B5.jpg" }
            ],
            3: [
                { "title": "C1", "url": "gallery_images/C1.jpg" },
                { "title": "C2", "url": "gallery_images/C2.jpg" },
                { "title": "C3", "url": "gallery_images/C3.jpg" },
                { "title": "C4", "url": "gallery_images/C4.jpg" },
                { "title": "C5", "url": "gallery_images/C5.jpg" }
            ],
            4: [
                { "title": "D1", "url": "http://placekitten.com/400/300" },
                { "title": "D2", "url": "http://placekitten.com/400/302" },
                { "title": "D3", "url": "http://placekitten.com/400/303" },
                { "title": "A4", "url": "http://placekitten.com/400/304" },
                { "title": "D5", "url": "http://placekitten.com/400/305" }
            ]
        };
    }
    GalleryImageService.prototype.getImages = function (galleryId) {
        return this.images[galleryId];
    };
    GalleryImageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GalleryImageService);
    return GalleryImageService;
}());
exports.GalleryImageService = GalleryImageService;
//# sourceMappingURL=gallery-image.service.js.map