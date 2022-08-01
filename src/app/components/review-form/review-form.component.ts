import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IReviewSubmit } from 'src/app/services/interfaces/review-submit';
import { IReview } from 'src/app/services/interfaces/revirew.interface';
import { IUser } from 'src/app/services/interfaces/user.interface';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
	selector: 'app-review-form',
	templateUrl: './review-form.component.html',
	styleUrls: ['./review-form.component.scss'],
})
export class ReviewFormComponent {
	@Input() reviews: Array<IReview> = [];
	@Output() post = new EventEmitter<IReviewSubmit>();
	@Output() delete = new EventEmitter<number>();
	private show_id?: number;

	constructor(
		private readonly authService: AuthService,
		private route: ActivatedRoute,
		private readonly showService: ShowService,
	) {
		this.show_id = parseInt(this.route.snapshot.params['id']);
	}

	public form = new FormGroup({
		comment: new FormControl(''),
		rating: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(5)]),
	});

	public onPostClick() {
		this.post.emit({
			rating: this.score,
			comment: this.form.controls.comment.value,
			show_id: this.show_id,
		} as IReviewSubmit);

		this.form.reset();
	}

	public onStarClick(i: number) {
		this.form.controls.rating.setValue(i);
	}

	public get score(): number {
		return this.form.controls.rating.value || 0;
	}

	public onDelete(event: number) {
		this.delete.emit(event);
	}
}
