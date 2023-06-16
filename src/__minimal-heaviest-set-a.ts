function arraySum(arr: number[]) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function isArrayOfOneRepeatedItem(arr: number[]) {
  return (new Set(arr)).size <= 1;
}

function minimalHeaviestSetA(arr: number[]) {
  // Write your code here
  const b: number[] = isArrayOfOneRepeatedItem(arr) ? arr : arr.sort((a, b) => a - b);
  const a: number[] = [];
  
  while (
    b.length > 0
    && a.length < b.length
    && arraySum(a) < arraySum(b)
  ) {
    const popped = b.pop();
    
    if (popped) {
      a.push(popped);
    }
  }

  return a.sort((a, b) => a - b);
}
