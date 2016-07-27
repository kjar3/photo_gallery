import { Injectable } from '@angular/core';

export interface Gallery {
	id: number;
	name: string;
}

@Injectable()
export class GalleryService {
	
	galleries:Gallery[];

	constructor() {
		this.galleries = [
		{id: 1, name: 'Gallery A'},
		{id: 2, name: 'Gallery B'},
		{id: 3, name: 'Gallery C'},
		{id: 4, name: 'Gallery D'}
		];
	}

	getGalleries() {
		return this.galleries;
	}
}