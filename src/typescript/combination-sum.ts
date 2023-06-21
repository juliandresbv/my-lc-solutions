function recurssion(candidates: number[], target: number, combination: number[], results: number[][]) {
  if (target < 0) {
    return;
  } else if (target == 0) {
    results.push(combination);
  } else {
    for (let i = 0; i < candidates.length; i++) {
      recurssion(candidates.slice(i), target - candidates[i], [...combination, candidates[i]], results)
    }
  }  
}

function combinationSum(candidates: number[], target: number): number[][] {  
  let results: number[][] = [];

  recurssion(candidates, target, [], results);

  return results;
};