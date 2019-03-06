function scopingExample(hasValue){
	if(hasValue){
		value = 1;
	}else{
		value = 0;
	}
	console.log(value);
	var value;
}
scopingExample(true);
scopingExample(false);