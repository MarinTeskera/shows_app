import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShowCardComponent } from './show-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { StarsModule } from '../stars/stars.module';

@NgModule({
	declarations: [ShowCardComponent],
	imports: [CommonModule, MatCardModule, MatIconModule, RouterModule, StarsModule],
	exports: [ShowCardComponent],
})
export class ShowCardModule {}
