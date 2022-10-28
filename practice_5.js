var containsDuplicate = function (nums) {
  let low = 0;
  let high = 1;
  while (low < nums.length) {
    console.log(nums[low]);
    if (high <= nums.length) {
      if (nums[low] !== nums[high]) {
        high++;
      } else {
        return true;
      }
    } else {
      low++;
      high = 0;
    }
  }
  return false;
};
 containsDuplicate([2,3,4,5])