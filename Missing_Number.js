// Missing Number

var MissingNumber = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return (nums.length * (nums.length + 1)) / 2 - sum;
};

// 2nd method
var MissingNumber = function (nums) {
  return (nums.length * (nums.lenght + 1)) / 2 - nums.reduce((acc, num));
};
