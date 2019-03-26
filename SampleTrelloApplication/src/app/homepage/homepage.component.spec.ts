import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { of } from 'rxjs';
import { HomepageComponent } from './homepage.component';
import { TrelloService } from './../service/trello.service';

describe('HomepageComponent', () => {
	let component: HomepageComponent;
	let fixture: ComponentFixture<HomepageComponent>;

	beforeEach(async(() => {
		const mockTrelloService = { getBoardsWithPromises: () => of([]).toPromise() };
		TestBed.configureTestingModule({
			declarations: [HomepageComponent],
			imports: [RouterModule.forRoot([])],
			providers: [{ provide: APP_BASE_HREF, useValue: '/' },
			{ provide: TrelloService, useValue: mockTrelloService }]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HomepageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('컴포넌트 생성 확인', () => {
		expect(component).toBeTruthy();
	});

	it('두 개의 보드가 있는지 확인', () => {
		component.boards = new Array();
		component.boards.push(
			{
				id: 1,
				task: [],
				title: 'Board 1'
			},
			{
				id: 2,
				task: [],
				title: 'Board 2'
			}
		);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		const title = compiled.querySelectorAll('.title');
		expect(title[0].textContent).toContain('Board 1');
		expect(title[1].textContent).toContain('Board 2');
		expect(component.boards.length).toBe(2);
	});

	it('새 보드 생성', () => {
		component.addBoard();
		fixture.detectChanges();
		expect(component.boards.length).toBe(1);
		const compiled = fixture.debugElement.nativeElement;
		const title = compiled.querySelectorAll('.title');
		expect(title.length).toBe(2);
		expect(title[0].textContent).toContain('새 보드');
	});
});
