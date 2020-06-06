// Write a function to compare two indices of sum to a number

function twoSum(array, number){
	arrayLength = array.length
	if(array == null) return 
	for(let index = 0; index<=arrayLength - 1; index++){
		for(let col= index;col<=arrayLength - 2; col++){
			const sumOfTwoIndicies = array[index] + array[col + 1]
			if(sumOfTwoIndicies === number) return (`Indices of the two numbers are: [${index}, ${col + 1}]`)
		}
	}
}

console.log(twoSum([5, 2, 11, 15, 7], 22))
console.log(twoSum([], 22))
console.log(twoSum([5, 2, 11, 15, 7], 9))