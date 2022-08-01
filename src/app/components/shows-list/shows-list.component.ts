import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IShow } from 'src/app/services/interfaces/show.interface';
import { Show } from '../../services/show/show.model';

interface rating_index {
	average_rating: number;
	index: number;
}

@Component({
	selector: 'app-shows-list',
	templateUrl: './shows-list.component.html',
	styleUrls: ['./shows-list.component.scss'],
})
export class ShowsListComponent {
	@Input() public shows?: Array<IShow> | null;

	/* public addAverageRating(average_rating: number, show: IShow): void {
		const index = (this.shows || []).indexOf(show);

		if (this.shows) {
			let shows: Array<IShow> = this.shows;
			shows[index].average_rating = average_rating;

			this.addRating.emit(shows);
		}
	} */
}
