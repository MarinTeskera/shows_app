import { Component } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, Observable, switchMap } from 'rxjs';
import { IAllShowsResponse } from 'src/app/services/interfaces/all-shows-response.interface';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
	selector: 'app-shows-container',
	templateUrl: './shows-container.component.html',
	styleUrls: ['./shows-container.component.scss'],
})
export class ShowsContainerComponent {
	private trigger$: BehaviorSubject<undefined> = new BehaviorSubject(undefined);
	public response$: Observable<IAllShowsResponse> = this.trigger$.pipe(
		switchMap(() => {
			return this.showService.loadAllShows().pipe(
				catchError((error) => {
					this.failed = true;
					console.error(error);
					return EMPTY;
				}),
			);
		}),
	);
	public failed = false;

	constructor(private showService: ShowService) {}

	public reload() {
		this.failed = false;
		this.trigger$.next(undefined);
	}
}
