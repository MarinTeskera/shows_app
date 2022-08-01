import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IShow } from 'src/app/services/interfaces/show.interface';
import { Show } from 'src/app/services/show/show.model';

@Component({
	selector: 'app-show-form',
	templateUrl: './show-form.component.html',
	styleUrls: ['./show-form.component.scss'],
})
export class ShowFormComponent {
	@Output() public addShow = new EventEmitter<Array<Show>>();
	@Input() public shows?: Array<Show> | null;
}
