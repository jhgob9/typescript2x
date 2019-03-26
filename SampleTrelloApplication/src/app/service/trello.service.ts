import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/* import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators'; */

import { Board } from '../model/board';
import { Task } from '../model/task';
import { SubTask } from '../model/subtask';

@Injectable()
export class TrelloService {
	private _boardUrl = 'api/board/boards.json';
	public Boards: Board[];

	constructor(private _http: HttpClient) { }

	/* getBoards(): Observable<Board[]> {
		if (this.Boards == undefined) {
			return this._http.get(this._boardUrl)
				.pipe(
					map((response: Response) => <Board[]>response.json()),
					tap(data => this.Boards = data),
					catchError(this.handleError)
				)
		} else {
			return Observable.of(this.Boards);
		}
	} */
	getBoardsWithPromises(): Promise<Board[]> {
		if (this.Boards == undefined) {
			return this._http.get(this._boardUrl).toPromise()
				.then((response: Response) => {
					this.Boards = response as unknown as Board[];
					return response as unknown as Board[];
					// this.Boards = <Board[]> <unknown> response;
					// return <Board[]> <unknown> response;
				});
		} else {
			return Promise.resolve(this.Boards);
		}
	}
	public seedData() {
		const temptask: Task = new Task();
		const tempSubTask: SubTask = new SubTask();
		const board: Board = new Board();

		temptask.id = 1;
		temptask.title = 'Hello Task!!';
		temptask.taskheaderId = '1';

		tempSubTask.id = '1';
		tempSubTask.title = 'Hello Task Header!!';

		temptask.subtask = Array();
		temptask.subtask.push(tempSubTask);

		board.id = 1;
		board.title = 'Hello Seed Board';
		board.task = new Array();
		board.task.push(temptask);


		this.Boards = new Array();
		this.Boards.push(board);

		return board;

	}
}
