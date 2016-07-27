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
//Compoent Decorator
var CSSGalleryComponent = (function () {
    function CSSGalleryComponent(galleryService) {
        this.galleryService = galleryService;
    }
    CSSGalleryComponent.prototype.getImages = function (galleryId) {
        this.images = this.galleryService.getImages(galleryId);
    };
    CSSGalleryComponent.prototype.ngOnInit = function () {
        this.getImages(this.galleryId);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], CSSGalleryComponent.prototype, "galleryId", void 0);
    CSSGalleryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'css-carousel',
            providers: [gallery_image_service_1.GalleryImageService],
            template: "\n\t\t<div class=\"carousel\">\n\t\t  <ul class=\"slides\">\n\t\t    <li *ngFor=\"let image of images\">\n\t\t     \t<img src=\"{{image.url}}\" alt=\"\">\n\t\t    </li>\n\t\t  </ul>\n\t\t</div>\n\t  ",
            //todo use styleUrls  
            //styleUrls: ['gallery.component.css']
            styles: ["\n\t\t:host(.active) {\n\t\t\tbackground: black;\n\t\t}\n\n\t\t.carousel{\n\t\t    overflow:hidden;\n\t\t    width:100%;\n\t\t}\n\t\t.slides{\n\t\t    list-style:none;\n\t\t    position:relative;\n\t\t    width:500%; /* Number of panes * 100% */\n\t\t    overflow:hidden; /* Clear floats */\n\t\t        /* Slide effect Animations*/\n\t\t    -moz-animation:carousel 30s infinite;\n\t\t    -webkit-animation:carousel 30s infinite;\n\t\t    animation:carousel 30s infinite;\n\t\t}\n\t\t.slides > li{\n\t\t    position:relative;\n\t\t    float:left;\n\t\t    width: 20%; /* 100 / number of panes */\n\t\t}\n\t\t.carousel img{\n\t\t    display:block;\n\t\t    width:100%;\n\t\t    max-width:100%;\n\t\t}\n\n\t\t@keyframes carousel{\n\t\t    0%    { left:-1%; }\n\t\t    11%   { left:-1%; }\n\t\t    12.5% { left:-101%; }\n\t\t    23.5% { left:-101%; }\n\t\t    25%   { left:-205%; }\n\t\t    36%   { left:-205%; }\n\t\t    37.5% { left:-305%; }\n\t\t    48.5% { left:-305%; }\n\t\t    50%   { left:-405%; }\n\t\t    61%   { left:-405%; }\n\t\t    62.5% { left:-305%; }\n\t\t    73.5% { left:-305%; }\n\t\t    75%   { left:-205%; }\n\t\t    86%   { left:-205%; }\n\t\t    87.5% { left:-105%; }\n\t\t    98.5% { left:-105%; }\n\t\t    100%  { left:-5%; }\n\t\t}\n\t"],
        }), 
        __metadata('design:paramtypes', [gallery_image_service_1.GalleryImageService])
    ], CSSGalleryComponent);
    return CSSGalleryComponent;
}());
exports.CSSGalleryComponent = CSSGalleryComponent;
//# sourceMappingURL=gallery.component.js.map