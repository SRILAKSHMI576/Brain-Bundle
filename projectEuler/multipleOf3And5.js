///Find the sum of all the multiples of 3 or 5 below 1000.

function multipleOf3And5(num){
	let sum = 0;
	for(let i = 1; i < num; i++){
		if(i % 3 == 0 || i % 5 == 0 ){
		sum += i
		}
	}
	return sum;
}
const result = multipleOf3And5(1000)
console.log(result)
