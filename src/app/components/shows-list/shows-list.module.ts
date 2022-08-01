import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShowCardModule } from '../show-card/show-card.module';
import { ShowsListComponent } from './shows-list.component';

@NgModule({
	declarations: [ShowsListComponent],
	imports: [CommonModule, ShowCardModule],
	exports: [ShowsListComponent],
})
export class ShowsListModule {}
