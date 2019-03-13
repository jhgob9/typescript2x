// 데코레이션 정의
function logger(target: Function) {
	// 데코레이션 로직 구현
}

// 데코레이션 클래스에 적용
@logger
class Book {
	constructor(private title: string) { }
}