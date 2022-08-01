import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { StarsModule } from '../stars/stars.module';
import { SingleReviewComponent } from './single-review.component';

@NgModule({
	declarations: [SingleReviewComponent],
	imports: [CommonModule, MatCardModule, StarsModule, MatMenuModule, MatIconModule],
	exports: [SingleReviewComponent],
})
export class SingleReviewModule {}
