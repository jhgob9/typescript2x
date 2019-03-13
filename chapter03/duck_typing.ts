interface IArticle{
	// 프로퍼티
	author:string;
	title:string;
	// 메서드
	formatDate():void;
}
class Article{
	author: string;
	title: string;
	// 메서드
	formatDate(): void{
		// 상세구현
	}
}
function news(article: IArticle) {
	// 구현	
}
let espn = new Article;
news(espn);