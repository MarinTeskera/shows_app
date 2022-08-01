import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-show-card',
	templateUrl: './show-card.component.html',
	styleUrls: ['./show-card.component.scss'],
})
export class ShowCardComponent {
	@Input() public title: string = '';
	@Input() public average_rating: number | null = null;
	@Input() public image_url: string | null = null;
	@Input() public id: string = '';

	@Output() public addRating = new EventEmitter<number>();

	public addAverageRating(average_rating: number): void {
		this.addRating.emit(average_rating);
	}
}
