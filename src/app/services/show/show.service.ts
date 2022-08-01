import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap, throwError } from 'rxjs';
import { IAllShowsResponse } from '../interfaces/all-shows-response.interface';
import { IReviewResponse } from '../interfaces/review-response';
import { IReviewSubmit } from '../interfaces/review-submit';
import { IShowResponse } from '../interfaces/show-response';
import { IShow } from '../interfaces/show.interface';
import { ITopRatedResponse } from '../interfaces/top-rated-response';
import { StorageService } from '../storage/storage.service';
import { Show } from './show.model';

@Injectable({
	providedIn: 'root',
})
export class ShowService {
	private readonly showsList$ = this.storageService.load();

	constructor(private readonly storageService: StorageService, private readonly http: HttpClient) {}

	public loadAllShows(): Observable<IAllShowsResponse> {
		return this.http.get<IAllShowsResponse>('https://tv-shows.infinum.academy/shows');
	}

	public loadTopRated(): Observable<ITopRatedResponse> {
		return this.http.get<ITopRatedResponse>('https://tv-shows.infinum.academy/shows/top_rated');
	}

	public loadShow(id: string): Observable<IShowResponse> {
		return this.http.get<IShowResponse>(`https://tv-shows.infinum.academy/shows/${id}`);
	}

	public loadReviews(id: string): Observable<IReviewResponse> {
		return this.http.get<IReviewResponse>(`https://tv-shows.infinum.academy/shows/${id}/reviews`);
	}

	public postReview(review: IReviewSubmit): Observable<null> {
		return this.http.post<null>(`https://tv-shows.infinum.academy/reviews`, review);
	}

	public deleteReview(id: number): Observable<null> {
		return this.http.delete<null>(`https://tv-shows.infinum.academy/reviews/${id}`);
	}
}
