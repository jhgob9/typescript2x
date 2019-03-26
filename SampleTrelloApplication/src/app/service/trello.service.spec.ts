import { TrelloService } from './trello.service';
import { of } from 'rxjs';
import { Board } from '../model/board';

describe('Trello HTTP Service', () => {
	let trelloService: TrelloService;
	let mockHTTP;
	let fakeBoards: Board[];

	beforeEach(() => {
		mockHTTP = jasmine.createSpyObj('mockHTTP', ['get']);
		trelloService = new TrelloService(mockHTTP);
	});

	it('보드 undefined 확인', () => {
		mockHTTP.get.and.returnValue(of(fakeBoards));
		trelloService.getBoardsWithPromises().then(boards => this.boards = boards);
		expect(fakeBoards).toBeUndefined();
	});

	it('보드 defined 확인', () => {
		fakeBoards = new Array();
		mockHTTP.get.and.returnValue(of(fakeBoards));
		trelloService.getBoardsWithPromises().then(boards => this.boards = boards);
		expect(fakeBoards).toBeDefined();
	});

	it('보드 가져오기', () => {
		trelloService.Boards = new Array();
		trelloService.Boards.push({
			id: 0,
			title: 'Test Board',
			task: []
		});
		mockHTTP.get.and.returnValue(of(trelloService.Boards));
		trelloService.getBoardsWithPromises().then(boards => {
			fakeBoards = boards;
			expect(fakeBoards).toBeDefined();
			expect(fakeBoards[0].title).toEqual('Test Board');
		});
	});
});