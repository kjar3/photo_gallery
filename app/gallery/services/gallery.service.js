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
var GalleryService = (function () {
    function GalleryService() {
        this.galleries = [
            { id: 1, name: 'Gallery A' },
            { id: 2, name: 'Gallery B' },
            { id: 3, name: 'Gallery C' },
            { id: 4, name: 'Gallery D' }
        ];
    }
    GalleryService.prototype.getGalleries = function () {
        return this.galleries;
    };
    GalleryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GalleryService);
    return GalleryService;
}());
exports.GalleryService = GalleryService;
//# sourceMappingURL=gallery.service.js.map