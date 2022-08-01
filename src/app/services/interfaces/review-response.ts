import { IReview } from './revirew.interface';

export interface IReviewResponse {
	reviews: IReview[];
	meta: {
		pagination: {
			count: number;
			page: number;
			items: number;
			pages: number;
		};
	};
}
