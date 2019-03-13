// 데코레이션 정의
function logger(name: string) {
	return function(target:Function){
		console.log(`클래스 : ${name}`);
	}
}

// 데코레이션 클래스에 적용
@logger('책')
class Book {
	constructor(private title: string) { }
}