function removeDuplicates(array){
	const arrayLength = array.length
	for(let index = 0; index<= arrayLength; index++){
		for(let j=index; j<arrayLength - 1; j++){
			if(array[index] === array[j + 1]){
				const deleteIndex = array.splice(j +1 , 1)
				// console.log("delete", deleteIndex)
			}
		}
	}
	console.log("new array:", array, "array-length:",  array.length)
}

console.log(removeDuplicates([1, 1, 2])) // [1, 2] 2
console.log(removeDuplicates([0,0,1,1,2,2,3,3,4])) //[0,1,2,3,4] 5
console.log(removeDuplicates([0,1,1,2,2,3])) //[0,1,2,3] 4
