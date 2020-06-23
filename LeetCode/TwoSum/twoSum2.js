function twoSum(nums, target) {
    let numberIndex = {};
    let result = [];

    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      let complement = target - num;

      if (numberIndex[complement] !== undefined) {
		  console.log("number", numberIndex)
		  console.log("complement", numberIndex[complement])
        result[0] = numberIndex[complement];
        result[1] = i;

        return result;
      }

      numberIndex[num] = i;
    }

    return result;
};

console.log(twoSum([5, 2, 11, 15, 7], 9))