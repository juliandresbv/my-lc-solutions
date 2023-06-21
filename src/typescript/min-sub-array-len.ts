function minSubArrayLen(target: number, nums: number[]): number {
  let minLength = Number.POSITIVE_INFINITY;

  let leftIndex = 0;
  let total = 0;

  for (let rightIndex = 0; rightIndex < nums.length; rightIndex++) {
      total += nums[rightIndex];

      while (total >= target) {
          leftIndex++;
          minLength = Math.min((rightIndex - leftIndex) + 1, minLength);
          total -= nums[leftIndex];
      }
  }

  minLength = minLength == Number.POSITIVE_INFINITY ? 0 : minLength; 

  return minLength;
};