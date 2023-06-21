function _maxSubArray(nums: number[]): number {
  let maxSum = Number.MIN_SAFE_INTEGER;

  let arraySize = nums.length;
  let subArraySize = 0;


  while (subArraySize <= arraySize) {
      for (let i = 0; i < arraySize - subArraySize; i++) {
          let currSubArray = nums.slice(i, (i + subArraySize) + 1)
          let currSubArraySum = currSubArray.reduce((acc, curr) => acc + curr, 0)

          if (currSubArraySum > maxSum) {
              maxSum = currSubArraySum;
          }
      }

      subArraySize = subArraySize + 1;
  }

  return maxSum;
};

function maxSubArray(nums: number[]): number {
  let maxSum = Number.NEGATIVE_INFINITY
  let currMaxSum = 0

  for (let i = 0; i < nums.length; i++) {
    currMaxSum = currMaxSum + nums[i]

    if (currMaxSum > maxSum) {
      maxSum = currMaxSum
    }
    if (currMaxSum < 0) {
      currMaxSum = 0
    }
  }

  return maxSum
}