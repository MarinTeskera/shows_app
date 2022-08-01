import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReviewListModule } from '../review-list/review-list.module';
import { ReviewFormComponent } from './review-form.component';

@NgModule({
	declarations: [ReviewFormComponent],
	imports: [
		CommonModule,
		MatFormFieldModule,
		ReviewListModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
	],
	exports: [ReviewFormComponent],
})
export class ReviewFormModule {}
