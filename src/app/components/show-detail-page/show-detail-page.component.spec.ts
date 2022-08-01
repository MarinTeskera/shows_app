import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailPageComponent } from './show-detail-page.component';

describe('ShowDetailPageComponent', () => {
	let component: ShowDetailPageComponent;
	let fixture: ComponentFixture<ShowDetailPageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ShowDetailPageComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ShowDetailPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
