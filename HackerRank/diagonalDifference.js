function diagonalDifference(num, arr){
	console.log("Enter the array matrix type: ", num)
	const length = arr.length - 1
	// const rightDiagonal = arr[0] + arr[3]
	// const leftDiagonal = arr[1] + arr[2]
	// const diagonalDifferences = rightDiagonal - leftDiagonal
	// console.log("rightDig", diagonalDifferences)
	for(let index = 0; index<=length; index++){
		for(let j=0; j<=index; j++){
			const rightDiagonal = arr[index] + arr[j]
			console.log("Right",  arr[index] , arr[j])
		}	
	}

}

diagonalDifference(2, [1, 2, 3, 4])