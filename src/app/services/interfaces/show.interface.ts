import { IReview } from './revirew.interface';

export interface IShow {
	id: string;
	average_rating: number | null;
	description: string | null;
	image_url: string | null;
	no_of_reviews: number;
	title: string;
}
