abstract class Book{
	constructor(
		public author: string,
		public title: string,
		public length: number
	) {}
	abstract getFullTitle():string;
}
class TypeScript extends Book{
	getFullTitle():string{
		return `${this.title} by ${this.author}`;
	}
}