"use strict";
class customCounter implements Iterator<number>{
	private calculatedVal:number = 0;
	next(value?: any): IteratorResult<number>{
		this.calculatedVal = this.calculatedVal > 99 ? 0 : ++this.calculatedVal;
		return{
			done: false,
			value: this.calculatedVal
		}
	}
}
let c = new customCounter();
for(let i = 0; i < 101; i++){
	console.log(c.next().value);
}