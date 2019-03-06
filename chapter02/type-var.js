function outerFunction(){
	var value = 10;
	function innerFunction(){
		console.log(value);
	}
	return innerFunction;
}
var func = outerFunction();
func();