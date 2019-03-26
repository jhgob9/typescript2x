import { BoardComponent } from './board.component';
import { Board } from '../model/board';

describe('BoardComponent', () => {
	let boardComponent: BoardComponent;
	let mockElementRef, mockRoute, mockTrelloService;

	beforeEach(() => {
		boardComponent = new BoardComponent(mockElementRef, mockRoute, mockTrelloService);
	});

	it('기존 작업에 새 작업 추가 테스트', () => {
		boardComponent.addtaskText = 'Test task';
		boardComponent.board = new Board();
		boardComponent.board.id = 1;
		boardComponent.board.title = '보드 1';
		boardComponent.board.task = new Array();
		boardComponent.board.task.push({
			id: 1,
			title: '작업1',
			subtask: [],
			taskheaderId: '1'
		});
		boardComponent.addtask();
		expect(boardComponent.board.task.length).toBe(2);
	});

	it('첫 번째 작업 추가 테스트', () => {
		boardComponent.addtaskText = '더미';
		boardComponent.board = new Board();
		boardComponent.board.id = 1;
		boardComponent.board.title = '보드 1';
		boardComponent.board.task = new Array();
		boardComponent.addtask();
		expect(boardComponent.board.task.length).toBe(1);
		expect(boardComponent.board.task[0].id).toBe(1);
		expect(boardComponent.board.task[0].title).toBe('더미');
	});
});
