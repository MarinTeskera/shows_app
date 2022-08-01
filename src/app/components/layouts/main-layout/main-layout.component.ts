import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
	selector: 'app-main-layout',
	templateUrl: './main-layout.component.html',
	styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
	private destroyed = new Subject<void>();
	public currentScreenSize: string = '';

	// Create a map to display breakpoint names for demonstration purposes.
	displayNameMap = new Map([
		[Breakpoints.XSmall, 'XSmall'],
		[Breakpoints.Small, 'Small'],
	]);
	constructor(
		private storageService: StorageService,
		private readonly router: Router,
		private authService: AuthService,
		private breakpointObserver: BreakpointObserver,
	) {
		breakpointObserver
			.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
			.pipe(takeUntil(this.destroyed))
			.subscribe((result) => {
				for (const query of Object.keys(result.breakpoints)) {
					if (result.breakpoints[query]) {
						this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
					}
				}
			});
	}

	public onLogOutClick(): void {
		this.authService.logout();
		this.router.navigate(['login']);
	}
}
