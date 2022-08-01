import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, catchError, EMPTY, Observable, Subscription, switchMap, tap } from 'rxjs';
import { IReviewResponse } from 'src/app/services/interfaces/review-response';
import { IReviewSubmit } from 'src/app/services/interfaces/review-submit';
import { IShowResponse } from 'src/app/services/interfaces/show-response';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
	selector: 'app-show-detail-page',
	templateUrl: './show-detail-page.component.html',
	styleUrls: ['./show-detail-page.component.scss'],
})
export class ShowDetailPageComponent implements OnDestroy {
	private subscription: Subscription = new Subscription();
	private trigger$: BehaviorSubject<undefined> = new BehaviorSubject(undefined);
	public id?: string | null;
	public show$: Observable<IShowResponse> = this.trigger$.pipe(
		switchMap(() => {
			return this.showService.loadShow(this.id || '').pipe(
				catchError((error) => {
					this.failed = true;
					console.error(error);
					return EMPTY;
				}),
			);
		}),
	);
	public reviews$: Observable<IReviewResponse> = this.trigger$.pipe(
		switchMap(() => {
			return this.showService.loadReviews(this.id || '').pipe(
				catchError((error) => {
					this.failed = true;
					console.error(error);
					return EMPTY;
				}),
			);
		}),
	);
	public err: string = '';
	public failed = false;

	constructor(private readonly showService: ShowService, private route: ActivatedRoute) {
		this.id = route.snapshot.params['id'];
	}

	public reload() {
		this.failed = false;
		this.trigger$.next(undefined);
	}

	public deleteReview(event: number) {
		const deleteSubscription = this.showService.deleteReview(event).subscribe(() => this.reload());
		this.subscription.add(deleteSubscription);
	}

	public postReview(event: IReviewSubmit) {
		const postSubscription = this.showService.postReview(event).subscribe(() => this.reload());
		this.subscription.add(postSubscription);
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
