import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { LogoModule } from '../../logo/logo.module';
import { NavigationModule } from '../../navigation/navigation.module';
import { MainLayoutComponent } from './main-layout.component';

@NgModule({
	declarations: [MainLayoutComponent],
	imports: [
		CommonModule,
		NavigationModule,
		RouterModule,
		LogoModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
	],
	exports: [MainLayoutComponent],
})
export class MainLayoutModule {}
