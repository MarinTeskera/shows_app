import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
	declarations: [AuthLayoutComponent],
	imports: [CommonModule, RouterModule],
	exports: [AuthLayoutComponent],
})
export class AuthLayoutModule {}
