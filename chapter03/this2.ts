function Book(title){
	this.title = title;
	this.printTile = ()=> console.log(this.title + 'by Sachin Ohri');
}
var typeScript = new Book('TypeScript By Example');
setTimeout(typeScript.printTitle, 1000); // 함수호출
setTimeout(function () { typeScript.printTitle() }, 2000) // 메서드 호출