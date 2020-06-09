function removeElements(array, num){
	const emptyArray = []
	const arrayLength = array.length 
	for(let index = 0; index < arrayLength; index++){
		if(array[index] !== num){
			const pushElement = emptyArray.push(array[index])
			// console.log("push", pushElement)
		}
	}
	 console.log("new array:", emptyArray, "array-length:",  emptyArray.length)
}

console.log(removeElements([1,1,2], 1)) 			// 1 [2] 1
console.log(removeElements([3,2,2,3], 3)) 			// 3 [2,2] 2
console.log(removeElements([0,1,2,2,3,0,4,2], 2)) 	// 2 [0,1,3,0,4] 5
console.log(removeElements([0, 1, 1, 1, 2, 2, 3, 3, 4, 5, 6, 6, 6], 6)) // [0, 1, 1, 1, 2, 2, 3, 3, 4, 5] 10
