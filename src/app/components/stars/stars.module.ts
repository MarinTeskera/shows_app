import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsComponent } from './stars.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [StarsComponent],
	imports: [CommonModule, MatIconModule],
	exports: [StarsComponent],
})
export class StarsModule {}
