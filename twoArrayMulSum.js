function twoArrayMultiplySum(arr1, arr2){
	let sum = 0
	n = arr1.length
	for(let index=0; index<n;index++){
			sum += arr1[index] * arr2[index]						
	}
	return sum	
}
const finalResult = twoArrayMultiplySum([4,7,8], [5, 6, 9])
console.log(finalResult)