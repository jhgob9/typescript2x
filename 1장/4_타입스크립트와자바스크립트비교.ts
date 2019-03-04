function getlargestNumber(arr: number[]){
	let result = 0;
	for (let index = 0; index < arr.length; index++) {
		if(result < arr[index]){
			result = arr[index];
		}
	}
	/* if (result > 0) {
		result = true;
	}else{
		result = false;
	}; */
	return result;
}
let score = [1,2,3,4,5,6];
let highestScore = getlargestNumber(score);
console.log(highestScore);
