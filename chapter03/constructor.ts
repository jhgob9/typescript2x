class Book{
	public author:string;
	public title:string;
	public length:number;
	constructor(author:string, title:string, length:number){
		this.author = author;
		this.title = title;
		this.length = length;
	}
	setFullTitle():string{
		return `${this.title} by ${this.author}`;
	}
}
let typeScript = new Book('Sachin Ohri', 'TypeScript by Example', 300);