function twoSum(nums: number[], target: number): number[] {
  const twoIndexes: number[] = [];

  const numIndexMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    numIndexMap.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const x = target - nums[i];

    if (numIndexMap.has(x) && numIndexMap.get(x) != i) {
      twoIndexes.push(i, numIndexMap.get(x) as number);
      break;
    }
  }

  return twoIndexes;
};