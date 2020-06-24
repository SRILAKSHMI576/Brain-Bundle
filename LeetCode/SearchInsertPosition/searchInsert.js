function searchInsert(array, target) {
	let result = array.length;
    for(let index = 0; index < array.length; index++) {
        if( array[index] > target || target == array[index] ) {
            result = index;
            break;
        }
    }
    return result
};

console.log(searchInsert([1, 3, 4,5 ,7], 9))
