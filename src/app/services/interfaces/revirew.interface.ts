import { IUser } from './user.interface';

export interface IReview {
	id: string;
	comment: string;
	rating: number;
	show_id: number;
	user: IUser;
}
