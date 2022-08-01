import { Component } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, Observable, switchMap } from 'rxjs';
import { IShow } from 'src/app/services/interfaces/show.interface';
import { ITopRatedResponse } from 'src/app/services/interfaces/top-rated-response';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
	selector: 'app-top-rated',
	templateUrl: './top-rated.component.html',
	styleUrls: ['./top-rated.component.scss'],
})
export class TopRatedComponent {
	private trigger$ = new BehaviorSubject(undefined);
	public response$: Observable<ITopRatedResponse> = this.trigger$.pipe(
		switchMap(() => {
			return this.showService.loadTopRated().pipe(
				catchError((error) => {
					this.failed = true;
					console.error(error);
					return EMPTY;
				}),
			);
		}),
	);
	public failed = false;

	constructor(private readonly showService: ShowService) {}

	public reload() {
		this.failed = false;
		this.trigger$.next(undefined);
	}
}
