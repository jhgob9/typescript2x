import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { News } from './../../module/news';

@Injectable()
export class NewsapiService {
	static apiKey = 'b07f98f6575d47d99fd6057668f21cb2';
	baseUrl: string;
	constructor(private _http: HttpClient) {
		this.baseUrl = 'https://newsapi.org/v1/articles';
	}
	// 웹 서버에서 데이터를 가져오는 역할을 하는 메서드
	public fetchNewsFeed(source: string): Observable < News > {
		return this._http.get(`${this.baseUrl}/?source=${source}&sortBy=top&apiKey=${NewsapiService.apiKey}`).pipe(
			map((response: Response) => <News> response),
			tap(data => console.log('All: ' + JSON.stringify(data))),
			catchError(this.handleError)
		);	}
	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}
