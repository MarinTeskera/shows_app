import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IReview } from 'src/app/services/interfaces/revirew.interface';

@Component({
	selector: 'app-single-review',
	templateUrl: './single-review.component.html',
	styleUrls: ['./single-review.component.scss'],
})
export class SingleReviewComponent {
	@Input() review?: IReview;
	@Input() currentUserId?: string;
	@Output() reviewId = new EventEmitter<number>();

	public onDeleteClick() {
		if (this.review) {
			this.reviewId.emit(parseInt(this.review.id));
		}
	}
}
