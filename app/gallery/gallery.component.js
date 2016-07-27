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
            //Name of our tag
            selector: 'css-carousel',
            providers: [gallery_image_service_1.GalleryImageService],
            //Template for the tag
            template: "\n <div class=\"carousel\">\n\n  <ul class=\"slides\">\n\n    <li *ngFor=\"let image of images\">\n      \n      <img src=\"{{image.url}}\" alt=\"\">\n    </li>\n\n   \n  </ul>\n\n</div>\n  ",
            //Styles for the tag
            styles: ["\n.carousel{\n    overflow:hidden;\n    width:100%;\n}\n.slides{\n    list-style:none;\n    position:relative;\n    width:500%; /* Number of panes * 100% */\n    overflow:hidden; /* Clear floats */\n        /* Slide effect Animations*/\n    -moz-animation:carousel 30s infinite;\n    -webkit-animation:carousel 30s infinite;\n    animation:carousel 30s infinite;\n}\n.slides > li{\n    position:relative;\n    float:left;\n    width: 20%; /* 100 / number of panes */\n}\n.carousel img{\n    display:block;\n    width:100%;\n    max-width:100%;\n}\n\n\n@keyframes carousel{\n    0%    { left:-1%; }\n    11%   { left:-1%; }\n    12.5% { left:-101%; }\n    23.5% { left:-101%; }\n    25%   { left:-205%; }\n    36%   { left:-205%; }\n    37.5% { left:-305%; }\n    48.5% { left:-305%; }\n    50%   { left:-405%; }\n    61%   { left:-405%; }\n    62.5% { left:-305%; }\n    73.5% { left:-305%; }\n    75%   { left:-205%; }\n    86%   { left:-205%; }\n    87.5% { left:-105%; }\n    98.5% { left:-105%; }\n    100%  { left:-5%; }\n}\n  "],
        }), 
        __metadata('design:paramtypes', [gallery_image_service_1.GalleryImageService])
    ], CSSGalleryComponent);
    return CSSGalleryComponent;
}());
exports.CSSGalleryComponent = CSSGalleryComponent;
//# sourceMappingURL=gallery.component.js.map