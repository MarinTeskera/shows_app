import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Show } from '../show/show.model';

const SHOWS_KEY = 'shows';

@Injectable({
	providedIn: 'root',
})
export class StorageService {
	private readonly showList$ = this.createShowListBehaviorSubject();

	constructor() {
		console.log('StorageService singleton created');
	}

	private createShowListBehaviorSubject(): BehaviorSubject<Show[]> {
		const data = localStorage.getItem(SHOWS_KEY);
		if (data) {
			return new BehaviorSubject<Array<Show>>(JSON.parse(data));
		}
		return new BehaviorSubject<Array<Show>>([]);
	}

	public load<T>(): BehaviorSubject<Array<Show>> {
		return this.showList$;
	}

	public store<T>(data: T): void {
		localStorage.setItem(SHOWS_KEY, JSON.stringify(data));
	}

	/* public init<T>(key: string): void {
		if (!localStorage.getItem(key)) {
			localStorage.setItem(
				key,
				JSON.stringify(
					[
						{
							title: 'Peaky Blinders',
							description:
								'Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.',
							average_rating: 4.4,
							image_url:
								'https://mytvonline.io/wp-content/uploads/2022/02/Peaky-Blinders-Cast-and-Character-Guide.jpg',
							id: '1',
							reviews: [],
						},
						{
							title: 'Breaking Bad',
							description:
								'Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.',
							average_rating: 4.75,
							image_url: 'https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg?w=1280&h=720',
							id: '2',
							reviews: [
								{ comment: 'Great show', rating: 5, id: '1', show_id: 2, user: { email: 'john.doe@gmail.com', id: '4', image_url: null } },
								{ comment: 'Review', rating: 4, id: '2', show_id: 2, user: { email: 'john.doe@gmail.com', id: '4', image_url: null } },
							],
						},
						{
							title: 'The IT Crowd',
							description: `Two tech geeks are based out of a Reynholm Industries' basement. When a new supervisor is hired, she turns out to be illiterate in technology and together they land in hilarious situations.'`,
							average_rating: 4.25,
							image_url:
								'https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSYQ5gc9ODSd6eYMmyoMZViVvZIzHS0sSir9PHE_cUodMTWaAIhJYKxbm9lStsxzmzDVb6KGkM7I1WD_jZPWXocfbZMeSqgVLZ0Y.jpg?r=515',
							id: '3',
							reviews: [],
						},
						{
							title: 'The Umbrella Academy',
							description: `On one day in 1989, 43 infants are inexplicably born to random, unconnected women who showed no signs of pregnancy the day before. Seven are adopted by billionaire industrialist Sir Reginald Hargreeves, who creates the Umbrella Academy and prepares his "children" to save the world. In their teenage years, though, the family fractures and the team disbands. Fast forward to the present time, when the six surviving members of the clan reunite upon the news of Hargreeves' passing. They work together to solve a mystery surrounding their father's death, but divergent personalities and abilities again pull the estranged family apart, and a global apocalypse is another imminent threat. The series is based on a collection of comics and graphic novels created and written by My Chemical Romance lead singer Gerard Way.`,
							average_rating: 4,
							image_url:
								'https://occ-0-37-1567.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABc4Bp4lmhdqWFXsSJ2ArJhM2GocEp-O0WKOaEz3PkDu0bN9wVIE_TZeEGAnvRgWQzSDHS0w-d0hSVM5xjCBAQQFZanTCpgydC2SN.jpg?r=0ce',
							id: '4',
							reviews: [],
						}
					].map((show) => new Show(show)),
				),
			);
		}
	} */
}
