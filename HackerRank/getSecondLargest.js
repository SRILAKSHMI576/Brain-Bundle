function secondLargestNumber(array){
	array.sort(function(a, b) {
		return a - b
	}) 
	console.log(array.slice(-2)[0]);
}
secondLargestNumber([6, 4, 23, 17])

