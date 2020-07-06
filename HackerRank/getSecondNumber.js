function secondLargestNumber(nums){
	nums.sort(function(a, b) {
		return b - a
	}) 
	for(let i=0; i<nums.length; i++){
		if(nums[i] > nums[i+1]){
			return nums[i+1]
		}
	}
}

console.log(secondLargestNumber([2, 3, 6, 6, 5]))