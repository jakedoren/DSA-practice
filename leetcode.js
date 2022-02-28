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

//palindrome-number
var isPalindrome = function(x) {
    const input = Array.from(String(x), Number);
    const reversedInputArray = []
    for(let i = input.length - 1; i >= 0; i--) {
        reversedInputArray.push(input[i])
    }
    const reversedInput = reversedInputArray.join("")
    if(x == reversedInput) {
        return true
    } else {
        return false
    }
};