import { Component } from '@angular/core';
import { INavigationLink } from 'src/app/services/interfaces/navigation-link.interface';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
	public readonly navigationLinks: Array<INavigationLink> = [
		{
			url: '/',
			title: 'All Shows',
		},
		{
			url: '/top-rated',
			title: 'Top Rated',
		},
		{
			url: '/my-profile',
			title: 'My Profile',
		},
	];
}
