interface IArticle{
	// 프로퍼티
	author:string;
	title:string;
	discription:string;
	url:string;
	urlToImage: string;
	publishedAt: string;
	// 메서드
	getFormattedDate():string;
}