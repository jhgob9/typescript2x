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
	constructor(
		author: string,
		title: string,
		length: number,
		public releaseDate: string
	) {
		super(author, title, length);
	}	
}