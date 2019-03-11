class Book{
	public author:string;
	public title:string;
	public length:number;
	setFullTitle():string{
		return `${this.title} by ${this.author}`;
	}
}
let typeScript = new Book();
typeScript.title = 'TypeScript by Example';
typeScript.author = 'Sachin Ohri';
typeScript.length = 300;