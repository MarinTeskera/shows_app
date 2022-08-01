import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IMeResponse } from 'src/app/services/interfaces/me-response';
import { IReviewResponse } from 'src/app/services/interfaces/review-response';
import { IReview } from 'src/app/services/interfaces/revirew.interface';
import { Show } from 'src/app/services/show/show.model';

@Component({
	selector: 'app-review-list',
	templateUrl: './review-list.component.html',
	styleUrls: ['./review-list.component.scss'],
})
export class ReviewListComponent {
	@Input() reviews: IReview[] = [];
	@Output() delete = new EventEmitter<number>();

	constructor(private readonly authService: AuthService) {}

	public user$: Observable<IMeResponse> = this.authService.me();

	public onDeleteClick(event: number) {
		this.delete.emit(event);
	}
}
