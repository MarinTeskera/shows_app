import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SingleReviewModule } from '../single-review/single-review.module';
import { StarsModule } from '../stars/stars.module';
import { ReviewListComponent } from './review-list.component';

@NgModule({
	declarations: [ReviewListComponent],
	imports: [CommonModule, MatCardModule, StarsModule, SingleReviewModule],
	exports: [ReviewListComponent],
})
export class ReviewListModule {}
