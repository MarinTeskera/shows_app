import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { ReviewFormModule } from '../review-form/review-form.module';
import { ReviewListModule } from '../review-list/review-list.module';
import { ShowDetailPageComponent } from './show-detail-page.component';

@NgModule({
	declarations: [ShowDetailPageComponent],
	imports: [
		CommonModule,
		MatCardModule,
		MatIconModule,
		MatProgressSpinnerModule,
		MatButtonModule,
		MatIconModule,
		RouterModule,
		ReviewListModule,
		MatFormFieldModule,
		ReviewFormModule,
		MatButtonModule,
		ReactiveFormsModule,
		MatInputModule,
		ReviewFormModule,
	],
	exports: [ShowDetailPageComponent],
})
export class ShowDetailPageModule {}
