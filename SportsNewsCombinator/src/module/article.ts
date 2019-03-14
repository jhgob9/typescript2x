import { IArticle } from './IArticle';
export class Article implements IArticle {
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;

	getFormattedDate(): string {
		const date = new Date(this.publishedAt);
		const year = date.getFullYear();
		let month: number | string = date.getMonth() + 1;
		let dt: number | string = date.getDate();

		if (dt < 10) {
			dt = '0' + dt;
		}
		if (month < 10) {
			month = '0' + month;
		}
		const finaldate = year + '-' + month + '-' + dt;
		console.log(finaldate);
		return finaldate;
	}
}
