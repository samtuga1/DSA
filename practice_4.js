// Given an integer array nums, move all 0's to the end of it
//while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

var moveZeroes = function (nums) {
  let low = 0;                       // SPACE COMLEXITY O(1)
  let high = low + 1;                // SPACE COMLEXITY O(1)
  while (high <= nums.length -1 ) {  // TIME COMPLEXITY O(n)
    if (nums[low] !== 0) {
        low++;
        high++;
    }
    else {
        if(nums[high] !== 0) {
            [nums[low], nums[high]] = [nums[high], nums[low]];
            low++;
        }
        high++;
    }
  }
  return nums;
};
moveZeroes([0, 1, 0, 3, 6, 0]);

//OVERALL TIME COMPLEXITY = 0(n)
//OVERALL SPACE COMPLEXITY = 0(1)
