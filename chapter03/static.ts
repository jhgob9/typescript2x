class Book {
	public author: string;
	public title: string;
	public length: number;
	static publisher: string = 'Packt Pub';
	constructor(author: string, title: string, length: number) {
		this.author = author;
		this.title = title;
		this.length = length;
	}
	getFullTitle(): string {
		return `${this.title} by ${this.author}`;
	}
}
let typeScript = new Book('Sachin Ohri', 'TypeScript by Example', 300);
let publisher = Book.publisher;
console.log(typeScript.getFullTitle(), publisher);