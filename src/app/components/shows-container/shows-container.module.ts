import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { ShowFormModule } from '../show-form/show-form.module';
import { ShowsListModule } from '../shows-list/shows-list.module';
import { ShowsContainerComponent } from './shows-container.component';

@NgModule({
	declarations: [ShowsContainerComponent],
	imports: [
		CommonModule,
		ShowsListModule,
		ShowFormModule,
		MatProgressSpinnerModule,
		MatButtonModule,
		MatIconModule,
		RouterModule,
	],
	exports: [ShowsContainerComponent],
})
export class ShowsContainerModule {}
