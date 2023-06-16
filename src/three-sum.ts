function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const numIndexMap = new Map<number, number>();
  const pushed: string[] = [];

  const result: number[][] = [];
  
  for (let i = 0; i < nums.length; i++) {
    numIndexMap.set(nums[i], i);
  }
  
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const y = nums[i];
      const z = nums[j];
      const x = - y - z;

      const k = numIndexMap.get(x);
      
      if (numIndexMap.has(x) && i != j && i != k && j != k) {
        const toPush = [x, y, z].sort((a, b) => a - b);
        
        if (!pushed.includes(toPush.join(''))) {
          result.push(toPush);
          pushed.push(toPush.join(''));
        }
      }
    }
  }

  return result;
};

console.log(threeSum([-13,5,13,12,-2,-11,-1,12,-3,0,-3,-7,-7,-5,-3,-15,-2,14,14,13,6,-11,-11,5,-15,-14,5,-5,-2,0,3,-8,-10,-7,11,-5,-10,-5,-7,-6,2,5,3,2,7,7,3,-10,-2,2,-12,-11,-1,14,10,-9,-15,-8,-7,-9,7,3,-2,5,11,-13,-15,8,-3,-7,-12,7,5,-2,-6,-3,-10,4,2,-5,14,-3,-1,-10,-3,-14,-4,-3,-7,-4,3,8,14,9,-2,10,11,-10,-4,-15,-9,-1,-1,3,4,1,8,1]))