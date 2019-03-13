interface IArticle{
	// 프로퍼티
	author:string;
	title:string;
}
interface IEspn extends IArticle {
	// 프로퍼티
	discription: string;
}
let news: IEspn = {
	author:"ESPN",
	title:"Lastst News",
	discription:"Lastst ESPN News"
}