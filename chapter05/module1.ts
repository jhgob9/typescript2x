import { BoardService } from './module2'

interface iBoardService{
	url:string;
	getBoardInformation();
}
class BoardService2{
	url:string;
	getBoardInformation(){
		return '사용가능한 보드 없음1';
	}
}
let boardService = new BoardService2();
let boardService2 = new BoardService();
boardService.getBoardInformation();
boardService2.getBoardInformation();
