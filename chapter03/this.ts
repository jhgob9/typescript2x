function Book(title) {
	this.title = title;
	this.printTitle = function() {
		this.title = this.title + 'by Sachin Ohri';
		console.log(this.title)
	}
}
var typeScript = new Book('TypeScript By Example');
setTimeout(typeScript.printTitle, 1000); // 함수호출
setTimeout(function () { typeScript.printTitle()},2000) // 메서드 호출
