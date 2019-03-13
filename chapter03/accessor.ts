class Book {
	private _title:string;
	get title():string{
		return this._title;
	}
	set title(value:string){
		if(value != ''){
			this._title = value;
		}
	}
}
let typeScript = new Book();
typeScript.title = 'TypeScript by Example';