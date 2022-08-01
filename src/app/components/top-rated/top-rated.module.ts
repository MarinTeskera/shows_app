import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ShowsListModule } from '../shows-list/shows-list.module';
import { TopRatedComponent } from './top-rated.component';

@NgModule({
	declarations: [TopRatedComponent],
	imports: [CommonModule, ShowsListModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule],
	exports: [TopRatedComponent],
})
export class TopRatedModule {}
