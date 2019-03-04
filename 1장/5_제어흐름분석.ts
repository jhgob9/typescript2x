function projectStatus(x:string|number){
	if(typeof x === 'string'){ // x는 string 이거나 number 타입
		x = 10;
	}
	return x; // number 타입을 변환
}
console.log(projectStatus('10'));