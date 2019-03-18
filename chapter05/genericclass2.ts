interface ITitle{
	title: string;
}
class GenericClass2<T extends ITitle>{
	items: T[] = [];
	pushDate(val: T) {
		this.items.push(val);
	}
	getDate(index: number): T {
		return this.items[index];
	}
	getSpecificItem(title:string):T{
		for(let value of this.items){
			if(value.title == title){
				return value;
			}
		}
	}
}