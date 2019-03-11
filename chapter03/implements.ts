interface IArticle{
	// 프로퍼티
	author:string;
	title:string;
	formatDate():void;
}
class Article implements IArticle{
	author: string;
	title: string;
	formatDate(): void{
		// 상세 구현
	}
}
let espn:IArticle = new Article();