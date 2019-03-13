// 데코레이션 정의
function logger(name: string) {
	return function <newFunction extends Function> (target: newFunction): newFunction{
		let newConstructor : Function;
		// 새로운 constructor 구현
		return <newFunction> newConstructor;
	}
}