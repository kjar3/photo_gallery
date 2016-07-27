import { Injectable } from '@angular/core';

export interface Image {
	title: string;
	url: string;
}

@Injectable()
export class GalleryImageService {
	
	images: {};

	constructor() {
		this.images = {
		1:  [
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
				{ "title": "D1", "url": "gallery_images/D1.jpg" },
				{ "title": "D2", "url": "gallery_images/D2.jpg" },
				{ "title": "D3", "url": "gallery_images/D3.jpg" },
				{ "title": "A4", "url": "gallery_images/D4.jpg" },
				{ "title": "D5", "url": "gallery_images/D5.jpg" }
			]
		};
	}

	getImages(galleryId: number) {
		return this.images[galleryId];
	}
}