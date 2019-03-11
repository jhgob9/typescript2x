class Book{
	constructor(
		public author:string,
		public title: string,
		public length:number
	){
		this.author = author;
		this.title = title;
		this.length = length;
	}
	setFullTitle():string{
		return `${this.title} by ${this.author}`;
	}
}
let typeScript = new Book('TypeScript by Example', 'Sachin Ohri', 300);