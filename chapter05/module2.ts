interface iBoardService{
	url:string;
	getBoardInformation();
}
export class BoardService{
	url:string;
	getBoardInformation(){
		return '사용가능한 보드 없음2';
	}
}
let boardService = new BoardService();
boardService.getBoardInformation();
