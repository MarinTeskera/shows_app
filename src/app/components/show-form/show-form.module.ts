import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ShowFormComponent } from './show-form.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [ShowFormComponent],
	imports: [CommonModule, MatInputModule, MatButtonModule],
	exports: [ShowFormComponent],
})
export class ShowFormModule {}
