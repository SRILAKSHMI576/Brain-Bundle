function removeDuplicates(array){
	const result = []
	for(let i = 0; i < array.length; i++){
		if(array[i] !== array[i+1]){
			result.push(array[i])
		}
	}
	console.log(result.length)
	// return result.join(", ");
	return result;
}

console.log(removeDuplicates([1, 1, 2]))				// [1, 2] 		2
console.log(removeDuplicates([0,0,1,1,2,2,3,3,4])) 		//[0,1,2,3,4] 	5
console.log(removeDuplicates([0,1,1,2,2,3])) 			//[0,1,2,3] 	4
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))  	//[0,1,2,3,4]	5

console.log(removeDuplicates([0,0,1,1,1,1,1,1,2,2,3,3,3,3,4,4,4]))