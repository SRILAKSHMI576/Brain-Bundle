function arraySum(arr){
	let sum=0
	n = arr.length-1
	for(let index=0;index<=n;index++){
		sum = sum+arr[index]
	}
	return sum
}
const result = arraySum([1, 2, 3])
console.log(result)