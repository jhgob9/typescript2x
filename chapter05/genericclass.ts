class GenericClass<T>{
	items: T[] = [];
	pushDate(val:T){
		this.items.push(val);
	}
	getDate(index:number):T{
		return this.items[index];
	}
}
let numClass = new GenericClass<number>();
numClass.pushDate(10);
numClass.pushDate(20);
let num:number = numClass.getDate(0);

class Person{
	firstName: string;
	lastName: string;
}
let personClass = new GenericClass<Person>();
personClass.pushDate({ firstName: 'Homer', lastName: 'Simpeon' });
personClass.pushDate({ firstName: 'Marge', lastName: 'Simpeon' });
let person: Person = personClass.getDate(0);