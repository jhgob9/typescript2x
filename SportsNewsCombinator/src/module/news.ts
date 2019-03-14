import { IArticle } from './IArticle';

export class News {
	private _articles: IArticle[];
	constructor(public status: string, public source: string, public sortBy: string) {}
	get articles(): IArticle[] {
		return this._articles;
	}
	set articles(value: IArticle[]) {
		if (value.length > 0) {
			this._articles = value;
		}
	}
}
