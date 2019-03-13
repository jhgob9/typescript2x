class Book {
	constructor(
		public author: string,
		public title: string,
		public length: number
	) {}
	getFullTitle(): string {
		return `${this.title} by ${this.author}`;
	}
}
class TypeScript extends Book{
	public releaseDate:string;
}
let typeScript = new TypeScript('Sachin Ohri', 'TypeScript by Example', 300);
console.log( typeScript.author );