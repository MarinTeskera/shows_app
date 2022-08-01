import { IReview } from '../interfaces/revirew.interface';
import { IShow } from '../interfaces/show.interface';

export class Show {
	title: string;
	description: string | null;
	averageRating: number | null;
	imageUrl: string | null;
	id: string;

	constructor(show: IShow) {
		this.title = show.title;
		this.description = show.description;
		this.averageRating = show.average_rating;
		this.imageUrl = show.image_url;
		this.id = show.id;
	}
}
