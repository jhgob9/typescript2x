function getlargestNumber(arr){
	result = 0;
	for (index = 0; index < arr.length; index++) {
		if(result < arr[index]){
			result = arr[index];
		}
	}
	if (result > 0) {
		result = true;
	}else{
		result = false;
	};
	return result;
}
score = [1,2,3,4,5,6];
highestScore = getlargestNumber(score);
console.log(highestScore);