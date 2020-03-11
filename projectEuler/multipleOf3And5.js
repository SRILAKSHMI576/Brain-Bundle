///Find the sum of all the multiples of 3 or 5 below 1000.

function multipleOf3And5(num){
	let sum = 0;
	for(let index = 1; index < num; index++){
		if(index % 3 == 0 || index % 5 == 0 ){
		sum += index
		}
	}
	return sum;
}
const result = multipleOf3And5(1000)
console.log(result)
