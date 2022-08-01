import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { LogoModule } from '../logo/logo.module';
import { RegisterComponent } from './register.component';

@NgModule({
	declarations: [RegisterComponent],
	imports: [
		CommonModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule,
		MatButtonModule,
		RouterModule,
		MatIconModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		LogoModule,
	],
	exports: [RegisterComponent],
})
export class RegisterModule {}
