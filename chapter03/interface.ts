interface IArticle{
	// 프로퍼티
	author:string;
	title:string;
	discription:string;
	// 선택적 프로퍼티
	url?:string;
	// 메서드
	getFormattedDate():string;
}