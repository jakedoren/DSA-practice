// twoSum solution
var twoSum = function (nums, target) {
  let indexes = [];
  nums.forEach((num, index) => {
    let targetMatches = false;
    let i = 1;
    while (!targetMatches && i <= nums.length - 1) {
      if (num + nums[i] === target && indexes.length !== 2) {
        (index !== i) && indexes.push(index, i);
        targetMatches = true;
      }
      i++;
    }
  });
  return indexes;
};