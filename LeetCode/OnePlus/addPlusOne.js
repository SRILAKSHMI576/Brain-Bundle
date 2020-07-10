function addPlusOne(array){
	// for(let index=0; index<array.length; index++){
	// 	// if(index === array.length-1){
	// 	// 	array.splice(array.length-1, 1, array[index]+ 1)
	// 	// }
	// }
	array[array.length-1] += 1
	return array
}
console.log(addPlusOne([2, 3, 6, 45]))
console.log(addPlusOne([34, 56, 59, 80, 99]))
console.log(addPlusOne([12, 22, 45, 87]))
console.log(addPlusOne([22, 33, 44, 55, 66, 77, 88, 99, 100]))
console.log(addPlusOne([22]))