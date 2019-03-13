function writable(table:Object,
	propertyKey: string,
	descriptor: PropertyDecorator){
	console.log(`Setting ${propertyKey}`);
	descriptor.writable = true;
}

interfacePropertyDecorator {
	configurable?: boolean;
	enumerable?: boolean;
	value?: any;
	writable?: boolean;
	get? (): any;
	set? (v:any): void;
}

class Book {
	constructor(private title: string) { }
	@writable
	getDetails(name:string){}
}

function writable(naem:string){
	return function (table: Object,
		propertyKey: string,
		descriptor: PropertyDecorator) {
		console.log(`Setting ${propertyKey}`);
		descriptor.writable = true;
	}
}

function propertyDecorator(target: Object, propertyKey: string){
	// 데이터 로직 구현
}

function parameterDecorator(target: Object, propertyKey: string, index: number) {
	// 데이터 로직 구현
}